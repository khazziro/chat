import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOZ3-mhC9hmXaoE-EbqwmJ-J2qXO0qYXM",
  authDomain: "chat-f3035.firebaseapp.com",
  projectId: "chat-f3035",
  storageBucket: "chat-f3035.appspot.com",
  messagingSenderId: "561076587687",
  appId: "1:561076587687:web:b3ba957f3f9eadf2f75f82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
