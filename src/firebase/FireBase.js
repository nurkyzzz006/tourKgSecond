import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ8RjDJzg-SvaHhrmpTruQemT_flFqzeE",
  authDomain: "tourkg-b4524.firebaseapp.com",
  projectId: "tourkg-b4524",
  storageBucket: "tourkg-b4524.appspot.com",
  messagingSenderId: "119952017700",
  appId: "1:119952017700:web:98d4f8cbc4c7f3725e4bb1",
  measurementId: "G-M7ZPE9JV1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Экспорт auth отдельно
export default app;
