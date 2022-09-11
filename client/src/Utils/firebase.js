import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApMhxIQ_sPHJL6v8OhUpcNoLsDy78HdH0",
  authDomain: "blog-c1b20.firebaseapp.com",
  projectId: "blog-c1b20",
  storageBucket: "blog-c1b20.appspot.com",
  messagingSenderId: "1048087073043",
  appId: "1:1048087073043:web:47c918914c044236c30ae6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
