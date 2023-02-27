import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAcOfSmierbgGQRmQyvNP8fjL6razwBnQI",
    authDomain: "nextfire-bfe90.firebaseapp.com",
    projectId: "nextfire-bfe90",
    storageBucket: "nextfire-bfe90.appspot.com",
    messagingSenderId: "77771598912",
    appId: "1:77771598912:web:ad499aaa928e04909083a5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
