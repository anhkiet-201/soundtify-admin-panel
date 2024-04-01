import { v4 } from 'uuid';

export type Song = {
    id: string,
    name: string,
    artistId: string,
    duration: number,
    url: string,
    token: string,
    cover?: string,
    uploadTime: number,
    description?: string,
    listenCount: number,
    lyric?: string,
    otherArtist: string[]
}

export const createSong = (
    name: string,
    artistId: string,
    duration: number,
    url: string,
    token: string,
    otherArtist: string[],
    cover?: string,
    description?: string,
    lyric?: string,
) : Song => {
    return {
        id: v4(),
        name: name,
        artistId: artistId,
        duration: duration,
        url: url,
        token: token,
        cover: cover,
        uploadTime: Date.now(),
        description: description,
        listenCount: 0,
        lyric: lyric,
        otherArtist: otherArtist
    }
}