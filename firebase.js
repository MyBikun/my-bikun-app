import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA1mKIZGO-i7dTWVzz1F3h9rv1PCjID_go",
  authDomain: "mybikun-dev-367922.firebaseapp.com",
  projectId: "mybikun-dev-367922",
  storageBucket: "mybikun-dev-367922.appspot.com",
  messagingSenderId: "390493148866",
  appId: "1:390493148866:web:dece7eadd630c2863fcd5b",
});

export const fireDb = app.firestore();

export default app;
