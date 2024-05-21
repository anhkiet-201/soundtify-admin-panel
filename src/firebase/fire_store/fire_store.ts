import { count, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore"
import { Song } from "../../types/song"
import { artCollection, songCollection, userCollection } from "./fire_store_path"
import { Artist } from "../../types/artist"
import { NativeSong } from "../../types/native_song"
import { fireStore } from "../firebase"
import { SongStatis } from "../../types/song_statis"

export const registerAsArtist = async (artist: Artist) => {
    const docData = doc(
        artCollection, artist.id
    )
    try {
        await updateDoc(
            docData,
            artist
        )
    } catch {
        await setDoc(
            docData,
            artist
        )
    }
}


export const uploadSong = async (song: Song) => (await setDoc(doc(songCollection, song.id), song))

const getNativeSongBySong = async (song: Song): Promise<NativeSong> => {
    let artist = (
        await getDoc(
            doc(
                artCollection,
                song.artistId,
            )
        )
    ).data() as Artist;
    return {
        song,
        artist
    };
}

export const getAllSong = async (): Promise<NativeSong[]> =>  {
    let snapshot = await getDocs(
        query(
            songCollection
        )
    )
    let songs = snapshot.docs.map((e) => (e.data() as unknown as Song)).filter((song) => song != null);
    var nativeSongs: NativeSong[] = [];
    for(let song of songs) {
        let nav = await getNativeSongBySong(song);
        nativeSongs.push(nav)
    }
    return nativeSongs;
}

export const getAllArtist = async (filter?: string): Promise<Artist[]> => {
    let snapshot = (
        await getDocs(
            query(
                artCollection,
                where(
                    "name",
                    ">=",
                    filter ?? ""
                ),
                where(
                    "name",
                    "<=",
                    `${filter ?? ""}\uf8ff`
                ),
                orderBy(
                    "name",
                    "desc"
                )
            )
        )
    ).docs
    return snapshot.map((e) => e.data() as unknown as Artist).filter((e) => (e != null));
}

export const totalArtist = async (): Promise<number> => {
    let snapshot = await getDocs(
        artCollection
    )
    return snapshot.docs.length
}

export const totalUser = async (): Promise<number> => {
    let snapshot = await getDocs(
        userCollection
    )
    return snapshot.docs.length
}

export const totalSong = async (): Promise<number> => {
    let snapshot = await getDocs(
        songCollection
    )
    return snapshot.docs.length
}

export const songStatistical = async ():Promise<SongStatis[]> => {
    let songs = (
        await getDocs(
            songCollection
        )
    ).docs.map((e) => (e.data() as unknown as Song)).filter((e) => (e!= null));
    let statisticalCount = new Map<string, number>();
    for (const song of songs) {
        let localeString = new Date(song.uploadTime).toLocaleDateString()
        statisticalCount.set(
            localeString,
            (statisticalCount.get(localeString) ?? 0) + 1
        )
    }
    let listSongStatis : SongStatis[] = [];
    statisticalCount.forEach((value, key) => {
        listSongStatis.push({
            date: new Date(key),
            numofSong: value
        });
    });
    return listSongStatis
}

