import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCXHkzyTghZKFNYD0qJLsFYYz-fT0KKErg",
  authDomain: "netflix-cl-js.firebaseapp.com",
  projectId: "netflix-cl-js",
  storageBucket: "netflix-cl-js.firebasestorage.app",
  messagingSenderId: "17102381530",
  appId: "1:17102381530:web:22306abf9291ed88dca0e3",
  measurementId: "G-XH9HX502Y0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
