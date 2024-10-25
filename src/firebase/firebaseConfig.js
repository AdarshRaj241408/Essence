// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyzcLG7gmrp3ZfCRUILTxd6pF_36oRiHI",
  authDomain: "essence-77854.firebaseapp.com",
  projectId: "essence-77854",
  storageBucket: "essence-77854.appspot.com",
  messagingSenderId: "339290295244",
  appId: "1:339290295244:web:768c7867edb41da623ab69",
  measurementId: "G-CNN2JW3NF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export the auth instance for use in your components
