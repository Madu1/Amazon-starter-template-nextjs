// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBFoTUBzmGGvhQ9395au66ljHWtgoQPe2Q",
    authDomain: "clone-2-4b432.firebaseapp.com",
    projectId: "clone-2-4b432",
    storageBucket: "clone-2-4b432.appspot.com",
    messagingSenderId: "659525497712",
    appId: "1:659525497712:web:6fb6f7ee00b8da90d595b5",
    measurementId: "G-EKR5RQDE1Q"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)  : firebase.app();

  const db = app.firestore();

  export default db;