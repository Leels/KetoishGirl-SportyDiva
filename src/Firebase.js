import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import 'firebase/storage';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyDNg_auV-eEi5qxDhk-o-IfYDa_4mV80A0",
  authDomain: "ketoish-girl-test.firebaseapp.com",
  databaseURL: "https://ketoish-girl-test.firebaseio.com",
  projectId: "ketoish-girl-test",
  storageBucket: "ketoish-girl-test.appspot.com",    messagingSenderId: "934058280034",
};
firebase.initializeApp(config);

const storage = firebase.storage();

const database = firebase.database();


export {
   database, storage, firebase as default
 }
