import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTmHnHbwvXmIjEtt7b56BglnhR_c3PVGI",
  authDomain: "twitter-clone-1fba9.firebaseapp.com",
  databaseURL: "https://twitter-clone-1fba9-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-1fba9",
  storageBucket: "twitter-clone-1fba9.appspot.com",
  messagingSenderId: "378283972968",
  appId: "1:378283972968:web:4c38d186548c65d5589edd",
  measurementId: "G-9E25S13X7Y"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;