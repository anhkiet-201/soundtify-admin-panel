import { Artist } from "../../types/artist";
import { Song } from "../../types/song";

export abstract class ApiRepository {
    abstract uploadNewSong(artist: Artist, song: Song): Promise<void>

    abstract getAllSong(): Promise<Song[]>
}