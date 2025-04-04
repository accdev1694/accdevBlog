// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmlTte5n-RqGjTlZuWCbOYLYAj6oRAIr4",
  authDomain: "my-blog-cfc41.firebaseapp.com",
  projectId: "my-blog-cfc41",
  storageBucket: "my-blog-cfc41.firebasestorage.app",
  messagingSenderId: "768552596683",
  appId: "1:768552596683:web:d7e8669aae13cd0980974e",
  measurementId: "G-SH18DYDN8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)