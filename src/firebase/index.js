import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqiitzVTzqILs8SiROenJpCKkXwqcbC88",
  authDomain: "ics4u-5e45c.firebaseapp.com",
  projectId: "ics4u-5e45c",
  storageBucket: "ics4u-5e45c.appspot.com",
  messagingSenderId: "499029440177",
  appId: "1:499029440177:web:7a1fcb2a19f9eaa0eed490"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }