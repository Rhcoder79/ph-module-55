// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnHLwKg17JSP7Dei5-oJnfKL3weccauNo",
  authDomain: "smart-deals-7f31f.firebaseapp.com",
  projectId: "smart-deals-7f31f",
  storageBucket: "smart-deals-7f31f.firebasestorage.app",
  messagingSenderId: "343256647358",
  appId: "1:343256647358:web:45e8a61537fed147b640ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);