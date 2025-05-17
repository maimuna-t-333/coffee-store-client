// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkdl0l_bp7Nyx2yCRjnGDdpQTuwD5_cZo",
  authDomain: "coffee-store-app-a0702.firebaseapp.com",
  projectId: "coffee-store-app-a0702",
  storageBucket: "coffee-store-app-a0702.firebasestorage.app",
  messagingSenderId: "210684727628",
  appId: "1:210684727628:web:89cf4017b8f6c9ad44ffe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);