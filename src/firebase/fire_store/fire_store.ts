import { doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore"
import { Song } from "../../types/song"
import { artCollection, songCollection } from "./fire_store_path"
import { Artist } from "../../types/artist"

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

export const getAllSong = async (): Promise<Song[]> =>  {
    let snapshot = await getDocs(
        query(
            songCollection
        )
    )
    return snapshot.docs.map((e) => (e.data() as unknown as Song))
}