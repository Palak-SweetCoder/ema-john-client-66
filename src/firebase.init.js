// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmo5VqQeluT6-HtzG7EujpYIBLHq89YzA",
  authDomain: "ema-john-simple-2a064.firebaseapp.com",
  projectId: "ema-john-simple-2a064",
  storageBucket: "ema-john-simple-2a064.appspot.com",
  messagingSenderId: "630698347012",
  appId: "1:630698347012:web:30fe2d6dd9823e22fc0351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;