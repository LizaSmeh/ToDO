
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzsDGVyvPbtvwt63stiMIDulMgQKvj8r4",
  authDomain: "todo-2922d.firebaseapp.com",
  databaseURL: "https://todo-2922d-default-rtdb.firebaseio.com",
  projectId: "todo-2922d",
  storageBucket: "todo-2922d.firebasestorage.app",
  messagingSenderId: "976589555017",
  appId: "1:976589555017:web:6c211bfb2ec99f11b48698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)