// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMFMMm1NBCuGxGNCP1tBdhoU6sSPH0oAs",
  authDomain: "todotiendacoder.firebaseapp.com",
  projectId: "todotiendacoder",
  storageBucket: "todotiendacoder.appspot.com",
  messagingSenderId: "8992681620",
  appId: "1:8992681620:web:ce96c126e5ff66e11c8e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);