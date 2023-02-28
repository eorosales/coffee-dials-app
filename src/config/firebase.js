// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt0L4pRDGfXTyaoRE35jIE_ygmi8lCImQ",
  authDomain: "coffee-dials-logger.firebaseapp.com",
  databaseURL: "https://coffee-dials-logger-default-rtdb.firebaseio.com",
  projectId: "coffee-dials-logger",
  storageBucket: "coffee-dials-logger.appspot.com",
  messagingSenderId: "755092615537",
  appId: "1:755092615537:web:b5571c3dd605832b7b86d0",
  measurementId: "G-P0ZYNXD0BH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
