// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO_ffupJOIMPE9m4ARtaqSzC1vGDkIAco",
  authDomain: "nexus-web-development-official.firebaseapp.com",
  databaseURL: "https://nexus-web-development-official-default-rtdb.firebaseio.com",
  projectId: "nexus-web-development-official",
  storageBucket: "nexus-web-development-official.firebasestorage.app",
  messagingSenderId: "553556577139",
  appId: "1:553556577139:web:bc86f60395c0f32d999306",
  measurementId: "G-KYSK367Y02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Helper function to check if the logged-in user is the owner
export const isOwner = (user) => {
  return user && user.email === "brodywilliams0226@gmail.com";
};
