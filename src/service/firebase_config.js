// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdKeu09DxBT_KRFSrCFvth1nHlchf4KJk",
  authDomain: "coinup-2447b.firebaseapp.com",
  projectId: "coinup-2447b",
  storageBucket: "coinup-2447b.appspot.com",
  messagingSenderId: "64146750797",
  appId: "1:64146750797:web:58bbc1f3a66cebf8cb8b04",
  measurementId: "G-5768PGEG9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
