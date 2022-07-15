import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC57EUAVc0ll32rrrpdPVkaZNGdBi-Lysk",
    authDomain: "messenger-clone4.firebaseapp.com",
    projectId: "messenger-clone4",
    storageBucket: "messenger-clone4.appspot.com",
    messagingSenderId: "352581123838",
    appId: "1:352581123838:web:79b86ddc97081de705efaf",
    measurementId: "G-1D1D73M2Q9"
});

const db = firebaseApp.firestore();

export default db ;

/* 
const firebaseConfig = {
  
};
*/