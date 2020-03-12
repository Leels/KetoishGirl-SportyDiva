import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import 'firebase/storage';
import 'firebase/database';


const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const storage = firebase.storage();

const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

export {
   database, storage, provider, auth, firebase as default
 }
