import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfHeZfg_7azd1Kvs_saUT4-_LJUMIxiIM",
    authDomain: "studybud-dc27e.firebaseapp.com",
    projectId: "studybud-dc27e",
    storageBucket: "studybud-dc27e.appspot.com",
    messagingSenderId: "414158651638",
    appId: "1:414158651638:web:30a72e9862659c68b66cd7",
    measurementId: "G-NE26Z7CGVC"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Use these for db, auth & provider
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;