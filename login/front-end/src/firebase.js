// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaim0Q6XyWeExRCOaLZtW_JUqqVYl8LGM",
  authDomain: "courier-d357d.firebaseapp.com",
  projectId: "courier-d357d",
  storageBucket: "courier-d357d.appspot.com",
  messagingSenderId: "886259890522",
  appId: "1:886259890522:web:1fabc9bc34a4a782749b63",
  measurementId: "G-6R1DKFYR84",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
