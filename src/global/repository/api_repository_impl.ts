import { getAllArtist, getAllSong, registerAsArtist, uploadSong } from "../../firebase/fire_store/fire_store";
import { Artist } from "../../types/artist";
import { NativeSong } from "../../types/native_song";
import { Song } from "../../types/song";
import { ApiRepository } from "./api_repository";

export class ApiRepositoryImpl extends ApiRepository {
    getAllArtist(filter?: string): Promise<Artist[]> {
        return getAllArtist(filter);
    }
    async getAllSong(): Promise<NativeSong[]> {
        return await getAllSong()
    }
    
    async uploadNewSong(artist: Artist, song: Song): Promise<void> {
        await registerAsArtist(artist);
        song.artistId = artist.id
        await uploadSong(song)
    }

}