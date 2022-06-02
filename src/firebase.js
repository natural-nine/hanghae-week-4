// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoLrAAIMwsn1BS7Iw8IF-1aoVH_6E6emc",
  authDomain: "sparta-react-686e7.firebaseapp.com",
  projectId: "sparta-react-686e7",
  storageBucket: "sparta-react-686e7.appspot.com",
  messagingSenderId: "61421026272",
  appId: "1:61421026272:web:68eea9f2ff19032cdd8985",
  measurementId: "G-CC5QPG9F5Y"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();