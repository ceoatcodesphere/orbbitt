// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your own Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyCQOrgXfrvEfvCnJFctAmCUIUWkWkzyhfQ", // Replace with your API key
  authDomain: "scriply-f5fab.firebaseapp.com", // Replace with your auth domain
  projectId: "scriply-f5fab", // Replace with your project ID
  storageBucket: "scriply-f5fab.appspot.com", // Replace with your storage bucket
  messagingSenderId: "228236639352", // Replace with your sender ID
  appId: "1:228236639352:web:2c3039d9c9f467193b818d", // Replace with your app ID
  measurementId: "G-9W3KK84WKB", // Replace with your measurement ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Get Firestore instance
const db = getFirestore(app);

// Export instances for use in your app
export { db, auth, googleProvider };
