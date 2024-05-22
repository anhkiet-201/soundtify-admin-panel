import { deleteDoc, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore"
import { Song } from "../../types/song"
import {reportCollection, artCollection, songCollection, userCollection} from "./fire_store_path"
import { Artist } from "../../types/artist"
import { NativeSong } from "../../types/native_song"
import { SongStatis } from "../../types/song_statis"
import {ReportFlag} from "../../types/report_flag.ts";
import {User} from "../../types/user.ts";

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

export const getAllUser = async (filter?: string): Promise<User[]> => {
    let snapshot = (
        await getDocs(
            query(
                userCollection,
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
    return snapshot.map((e) => e.data() as unknown as User).filter((e) => (e != null));
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

export const getAllReport = async (): Promise<Report[]> => {
    let reports = (
        await getDocs(
            reportCollection
        )
    ).docs.map((e) => (e.data() as unknown as ReportFlag)).filter((e) => (e != null));
    let reportOveride = new Map<string, Report>();
    for (const report of reports) {
        /// get Song
        let song = (
            await getDoc(
                doc(
                    songCollection,
                    report.songId
                )
            )
        ).data() as Song;
        /// get User
        let user = (
            await getDoc(
                doc(
                    userCollection,
                    report.uid
                )
            )
        ).data() as User;
        /// convert
        let previous = reportOveride.get(report.songId);
        reportOveride.set(
            report.songId,
            {
                song: song,
                numOfreport: (previous?.numOfreport ?? 0) + 1,
                reportFlags: [
                    ...(previous?.reportFlags ?? []),
                    {
                        id: report.id,
                        user: user,
                        reason: report.reason
                    }
                ]
            }
        )
    }
    ///
    let listReport: Report[] = [];
    reportOveride.forEach((value) => (listReport.push(value)));
    console.log(listReport);
    
    return listReport.sort((a, b) => (a.numOfreport - b.numOfreport));
}
export type ReportFlagNative = {
    id: string,
    user: User,
    reason: string,
}

export type Report = {
    song: Song,
    numOfreport: number,
    reportFlags: ReportFlagNative[]
}

export const deleteSongById = async (songId: string) => {
    await deleteDoc(
        doc(
            songCollection,
            songId,
        )
    )
}

export const deleteReportedSong = async (report: Report) => {
    await deleteSongById(report.song.id);
    /// remove report
    for (const reportFlag of report.reportFlags) {
        deleteDoc(
            doc(
                reportCollection,
                reportFlag.id
            )
        )
    }
}

export const deleteArtistById = async (artistId: string) => {
    await deleteDoc(
        doc(
            artCollection,
            artistId
        )
    )
}

export const getUserById = async (uid: string) : Promise<User | null> => {
    let user = (
        await getDoc(
            doc(
                userCollection,
                uid
            )
        )
    ).data() as unknown as User;
    return user
}