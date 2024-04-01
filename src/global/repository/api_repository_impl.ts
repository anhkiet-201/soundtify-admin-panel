import { getAllSong, registerAsArtist, uploadSong } from "../../firebase/fire_store/fire_store";
import { Artist } from "../../types/artist";
import { Song } from "../../types/song";
import { ApiRepository } from "./api_repository";

export class ApiRepositoryImpl extends ApiRepository {
    async getAllSong(): Promise<Song[]> {
        return await getAllSong()
    }
    
    async uploadNewSong(artist: Artist, song: Song): Promise<void> {
        await registerAsArtist(artist);
        song.artistId = artist.id
        await uploadSong(song)
    }

}