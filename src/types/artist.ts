import { v4 } from "uuid"

export type Artist = {
    id: string,
    uid?: string,
    name: string,
    thumbnail: string,
    description?: string
}

export const createArtist = (
    name: string,
    thumbnail: string,
    description?: string,
    uid?: string,): Artist => ({
        id: v4(),
        uid: uid,
        name: name,
        thumbnail: thumbnail,
        description: description
    })