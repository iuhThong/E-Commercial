// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6dBa50UzW-BGD_IMmnoFaaIftHVOilUg",
  authDomain: "e-commerce-e80c0.firebaseapp.com",
  projectId: "e-commerce-e80c0",
  storageBucket: "e-commerce-e80c0.firebasestorage.app",
  messagingSenderId: "86598825711",
  appId: "1:86598825711:web:92bdc3507a1401ac8e0d1a",
  measurementId: "G-FZF264GH16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);