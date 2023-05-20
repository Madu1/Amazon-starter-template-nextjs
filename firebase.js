// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCJHmQP34-EZOLQtimCLsVt706YQi6UZFU",
  authDomain: "clone-2-4f625.firebaseapp.com",
  projectId: "clone-2-4f625",
  storageBucket: "clone-2-4f625.appspot.com",
  messagingSenderId: "1022346687416",
  appId: "1:1022346687416:web:9cb85bd5407a777a40954d",
  measurementId: "G-KDX81FWWRG"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)  : firebase.app();

  const db = app.firestore();

  export default db;