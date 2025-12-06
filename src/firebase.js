// ...existing code...
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfozMygCAqsizJfj88tei4PrAnwdjWBo4",
  authDomain: "disneyplus-clone-ea977.firebaseapp.com",
  projectId: "disneyplus-clone-ea977",
  storageBucket: "disneyplus-clone-ea977.appspot.com", // fixed value
  messagingSenderId: "553852835032",
  appId: "1:553852835032:web:696a8485cd666582ccf3ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
// ...existing code...