import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBn3-Mx18UjIU-ASz9eKHvULb1vz8E-UmQ',
  authDomain: 'e-comerce-platform.firebaseapp.com',
  projectId: 'e-comerce-platform',
  storageBucket: 'e-comerce-platform.appspot.com',
  messagingSenderId: '937244140535',
  appId: '1:937244140535:web:4cd271e9c21def7d2cc4f2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
