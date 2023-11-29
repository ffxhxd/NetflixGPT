// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0JykmM18e5uLGCzLMtqKoLxTvWZi-Sk",
  authDomain: "netflixgpt-cb23a.firebaseapp.com",
  projectId: "netflixgpt-cb23a",
  storageBucket: "netflixgpt-cb23a.appspot.com",
  messagingSenderId: "169257944288",
  appId: "1:169257944288:web:04e38599cbb44908adbc85",
  measurementId: "G-WKNZL1KLE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
