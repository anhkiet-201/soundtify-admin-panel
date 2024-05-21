import { Artist } from "../../types/artist";
import { NativeSong } from "../../types/native_song";
import { Song } from "../../types/song";

export abstract class ApiRepository {
    abstract uploadNewSong(artist: Artist, song: Song): Promise<void>

    abstract getAllSong(): Promise<NativeSong[]>

    abstract getAllArtist(filter?: string): Promise<Artist[]>
}