// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYYD3UO1ZWzHVoAz0V2watGOixtNPmhfc",
  authDomain: "todoapp-d22fd.firebaseapp.com",
  projectId: "todoapp-d22fd",
  storageBucket: "todoapp-d22fd.appspot.com",
  messagingSenderId: "497719000638",
  appId: "1:497719000638:web:1aec97c20af226c95b5b6f",
  measurementId: "G-HHWDX37GQ1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
