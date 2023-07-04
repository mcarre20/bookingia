import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,

  authDomain: "bookingia.firebaseapp.com",

  projectId: "bookingia",

  storageBucket: "bookingia.appspot.com",

  messagingSenderId: "226932601631",

  appId: "1:226932601631:web:83b2caf26748140f07762a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();