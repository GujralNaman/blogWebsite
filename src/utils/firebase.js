import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "myblog-website-68a70.firebaseapp.com",
  projectId: "myblog-website-68a70",
  storageBucket: "myblog-website-68a70.appspot.com",
  messagingSenderId: "242621808878",
  appId: "1:242621808878:web:ff134c8002fae3a037b3ff",
};

export const app = initializeApp(firebaseConfig);