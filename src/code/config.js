// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ke3yrYTy8c5qnsujB6vO7wZqdbtZkO8",
  authDomain: "memo-ed13c.firebaseapp.com",
  projectId: "memo-ed13c",
  storageBucket: "memo-ed13c.appspot.com",
  messagingSenderId: "986299189081",
  appId: "1:986299189081:web:4ec05542d07ca94182ee48",
  measurementId: "G-FLQ736DEWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;