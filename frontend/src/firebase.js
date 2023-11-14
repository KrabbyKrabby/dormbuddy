// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDBIYgDWeCC-y6V_m4hDrllMySTBprIuTM",
  authDomain: "dormbuddy-32368.firebaseapp.com",
  projectId: "dormbuddy-32368",
  storageBucket: "dormbuddy-32368.appspot.com",
  messagingSenderId: "940384679605",
  appId: "1:940384679605:web:2e8a567feadc15f014f0fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const storage = getStorage(app);