import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCVE4BNu6HDUVgq-zFkX6411zvgAQf5AQ",
  authDomain: "mskportfolio-a3132.firebaseapp.com",
  projectId: "mskportfolio-a3132",
  storageBucket: "mskportfolio-a3132.firebasestorage.app",
  messagingSenderId: "492209284699",
  appId: "1:492209284699:web:07dae2d9a61055ee45417e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };