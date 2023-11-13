// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_SJZEOMG9TRisZBzmu6ql3Cubztpj2Ug",
  authDomain: "foodyapp-15c35.firebaseapp.com",
  databaseURL:
    "https://foodyapp-15c35-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "foodyapp-15c35",
  storageBucket: "foodyapp-15c35.appspot.com",
  messagingSenderId: "720586736727",
  appId: "1:720586736727:web:e2202c21101707e4478f12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
