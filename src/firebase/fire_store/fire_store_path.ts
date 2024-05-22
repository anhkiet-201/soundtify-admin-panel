import { collection } from "firebase/firestore";
import { fireStore } from "../firebase";

export const songCollection = collection(fireStore, "Song")

export const artCollection = collection(fireStore, "Artist")

export const userCollection = collection(fireStore, "User")

export const reportCollection = collection(fireStore, "ReportFlags")