// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAElFAcwrnoTroKbDhtOy-Ki3XtS_u3JYk",
  authDomain: "practice-context-login.firebaseapp.com",
  projectId: "practice-context-login",
  storageBucket: "practice-context-login.firebasestorage.app",
  messagingSenderId: "604680927050",
  appId: "1:604680927050:web:bc7fb163d81db048adf3b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);