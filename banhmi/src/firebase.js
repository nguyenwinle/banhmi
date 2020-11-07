import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUd3ut7mysPOvqNH1qg8G5vCYCFj6aOt0",
  authDomain: "breaking-bread-36df4.firebaseapp.com",
  databaseURL: "https://breaking-bread-36df4.firebaseio.com",
  projectId: "breaking-bread-36df4",
  storageBucket: "breaking-bread-36df4.appspot.com",
  messagingSenderId: "443209393980",
  appId: "1:443209393980:web:470165d0653c929e6f2039",
  measurementId: "G-5V1S5RTWJM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth };