// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTNVBDa4e1WmdLBeAwWGSJeGhWYDad5CM",
  authDomain: "medialsoft-cf9ac.firebaseapp.com",
  projectId: "medialsoft-cf9ac",
  storageBucket: "medialsoft-cf9ac.firebasestorage.app",
  messagingSenderId: "699811062436",
  appId: "1:699811062436:web:8263dff1967b5c3725bc31"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);