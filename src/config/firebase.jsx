import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCCJy-TfCnh7Xl5jIXzODGcDIitHTaTQU",
  authDomain: "react-ecommerce-8b70e.firebaseapp.com",
  projectId: "react-ecommerce-8b70e",
  storageBucket: "react-ecommerce-8b70e.appspot.com",
  messagingSenderId: "13793240095",
  appId: "1:13793240095:web:73552fc55812f39227612a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
