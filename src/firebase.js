import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyBtgluI8Na2o9q9HkN7DEbZblqCqykhAI4",
    authDomain: "evernote-26c8c.firebaseapp.com",
    databaseURL: "https://evernote-26c8c-default-rtdb.firebaseio.com",
    projectId: "evernote-26c8c",
    storageBucket: "evernote-26c8c.appspot.com",
    messagingSenderId: "725726493241",
    appId: "1:725726493241:web:f68f232cb521633c706be8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
