// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sharique-estate.firebaseapp.com",
  projectId: "sharique-estate",
  storageBucket: "sharique-estate.appspot.com",
  messagingSenderId: "270485295274",
  appId: "1:270485295274:web:11e70fb5e834d65a7600d3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
