import { doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore"
import { Song } from "../../types/song"
import { artCollection, songCollection } from "./fire_store_path"
import { Artist } from "../../types/artist"
import { NativeSong } from "../../types/native_song"
import { fireStore } from "../firebase"

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