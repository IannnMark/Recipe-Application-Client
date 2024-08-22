// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "recipe-application-6e187.firebaseapp.com",
    projectId: "recipe-application-6e187",
    storageBucket: "recipe-application-6e187.appspot.com",
    messagingSenderId: "523060339558",
    appId: "1:523060339558:web:d887217717888fa5ee5ea7",
    measurementId: "G-T1T3DF7E3V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
