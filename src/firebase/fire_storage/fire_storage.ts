import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireStorage } from "../firebase";

export const uploadSingleFile = async (path: string, file: Blob | Uint8Array | ArrayBuffer): Promise<string> => {
    const uploadResult = await uploadBytes(ref(fireStorage, path), file);
    return await getDownloadURL(uploadResult.ref)
};