import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

const firebaseConfig = {
    apiKey: "AIzaSyBuRojkoRPmxtPrDeNXa4IGg13o5HfkqXQ",
    authDomain: "ecomedicopi.firebaseapp.com",
    projectId: "ecomedicopi",
    storageBucket: "ecomedicopi.appspot.com",
    messagingSenderId: "76261282861",
    appId: "1:76261282861:web:b96e329e9c562836f114a4"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export {firebase, db, storage};