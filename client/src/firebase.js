// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d2495.firebaseapp.com",
  projectId: "mern-blog-d2495",
  storageBucket: "mern-blog-d2495.appspot.com",
  messagingSenderId: "587870845996",
  appId: "1:587870845996:web:ee15ccc4367900c2b16589"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);