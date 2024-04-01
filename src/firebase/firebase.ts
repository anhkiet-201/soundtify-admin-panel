// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { apiRepository } from "../di/injector";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2vt1JipOAD0prmXscNem8YJ47bJ2TsPU",
    authDomain: "datn-578a6.firebaseapp.com",
    projectId: "datn-578a6",
    storageBucket: "datn-578a6.appspot.com",
    messagingSenderId: "972673057633",
    appId: "1:972673057633:web:af21d5e432ff1026aafb20",
    measurementId: "G-NR5QQR5ZE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app)