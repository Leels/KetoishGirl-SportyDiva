import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = firebase.initializeApp(config);

const storage = firebase.storage();

const database = firebase.database();

const auth = firebase.auth();

export {
   database, storage, auth, app, firebase as default
 }
