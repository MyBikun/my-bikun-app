import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBjGAYjSiN_nGe4EdUXJDxa9Gzb-to0MUs",
  authDomain: "mybikun-dev.firebaseapp.com",
  projectId: "mybikun-dev",
  storageBucket: "mybikun-dev.appspot.com",
  messagingSenderId: "1092747043576",
  appId: "1:1092747043576:web:6e6dd4018996669028510d",
  measurementId: "G-CC0P3Y9T1W",
});

export const fireDb = app.firestore();
export const auth = app.auth();
export default app;
