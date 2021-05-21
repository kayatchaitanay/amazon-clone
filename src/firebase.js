import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnP9hjVoG242X7l5BcI3GJDMQrrFesuGc",
  authDomain: "clone-d9609.firebaseapp.com",
  projectId: "clone-d9609",
  storageBucket: "clone-d9609.appspot.com",
  messagingSenderId: "640460899951",
  appId: "1:640460899951:web:62c18b6ab928da4ef9af9a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };