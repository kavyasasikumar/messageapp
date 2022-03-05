import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0rq1RTstzrTC-uxqBRSvDxFYmZrRFXtQ",
  authDomain: "chatapp-76f50.firebaseapp.com",
  projectId: "chatapp-76f50",
  storageBucket: "chatapp-76f50.appspot.com",
  messagingSenderId: "173508274154",
  appId: "1:173508274154:web:09a27dacaca2944c8b3493",
  measurementId: "G-CF3Z7QN5M6",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth, db };
