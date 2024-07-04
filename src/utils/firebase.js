// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6YBiFvoPYBjZJrc2JM0FipCCEKHWiCeE",
  authDomain: "netflixai-f7516.firebaseapp.com",
  projectId: "netflixai-f7516",
  storageBucket: "netflixai-f7516.appspot.com",
  messagingSenderId: "1005213807780",
  appId: "1:1005213807780:web:b0a715d6b38b6531c9a231",
  measurementId: "G-G2111L23B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();