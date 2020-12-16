import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeJ-yM_FGcF53EWo-t3F8_0Yw0YmkUYps",
    authDomain: "just-fashion-4db87.firebaseapp.com",
    projectId: "just-fashion-4db87",
    storageBucket: "just-fashion-4db87.appspot.com",
    messagingSenderId: "583749903211",
    appId: "1:583749903211:web:7926b9a1014eb6133f622e",
    measurementId: "G-LRD7974YG6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;