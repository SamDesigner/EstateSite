// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";    
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvXB22bHlUGDf7Q-HRl4_vaNefLf7ZnBE",
  authDomain: "nneka-2a600.firebaseapp.com",
  projectId: "nneka-2a600",
  storageBucket: "nneka-2a600.firebasestorage.app",
  messagingSenderId: "1021187898240",
  appId: "1:1021187898240:web:c78a8c4096975b39159f65",
  measurementId: "G-TW0KZWPF0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);    
export const db = getFirestore(app);  