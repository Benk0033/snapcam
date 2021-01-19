import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnOp31HL_UqXmpWQ1M_QG-zl3i5MjBfGk",
    authDomain: "snapcam-a9b2c.firebaseapp.com",
    projectId: "snapcam-a9b2c",
    storageBucket: "snapcam-a9b2c.appspot.com",
    messagingSenderId: "1007350143581",
    appId: "1:1007350143581:web:2df6c01ae736cbb8b08bb4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };