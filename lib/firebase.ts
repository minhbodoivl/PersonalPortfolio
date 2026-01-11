import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtaZ_zT-ybP7Fi_u3By8Idk3lxSKaejGk",
  authDomain: "portfolio-blog-c0d9d.firebaseapp.com",
  projectId: "portfolio-blog-c0d9d",
  storageBucket: "portfolio-blog-c0d9d.firebasestorage.app",
  messagingSenderId: "5003460272",
  appId: "1:5003460272:web:b31400396c0fe3807a4575"
};

// Initialize Firebase
const app = getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);