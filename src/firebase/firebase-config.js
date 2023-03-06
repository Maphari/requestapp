// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALbccwkJJTvYB7f2UZkd0k4PxT4ds4-zY",
  authDomain: "request-app-f7fb7.firebaseapp.com",
  projectId: "request-app-f7fb7",
  storageBucket: "request-app-f7fb7.appspot.com",
  messagingSenderId: "135191532342",
  appId: "1:135191532342:web:b615092d95e4da88be9997",
  measurementId: "G-V9Z1LX7TPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider(app);
