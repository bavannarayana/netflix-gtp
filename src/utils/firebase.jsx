// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeu-LEHkU3fzi32j5y2Wqa8ADSGKhYH64",
  authDomain: "netflixgpt-c8255.firebaseapp.com",
  projectId: "netflixgpt-c8255",
  storageBucket: "netflixgpt-c8255.firebasestorage.app",
  messagingSenderId: "239658084931",
  appId: "1:239658084931:web:12aae0d012f53acfa182f6",
  measurementId: "G-H2Q36VCZP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
