import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCVE4BNu6HDUVgq-zFkX6411zvgAQf5AQ",
    authDomain: "mskportfolio-a3132.firebaseapp.com",
    projectId: "mskportfolio-a3132",
    storageBucket: "mskportfolio-a3132.firebasestorage.app",
    messagingSenderId: "492209284699",
    appId: "1:492209284699:web:07dae2d9a61055ee45417e"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };