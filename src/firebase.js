// import firebase from "firebase";
import firebase from './firebase';
// import {firebaseApp} from 'firebase/app';
// import firebase from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';//UPDATE
// import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNoh6CRafBcNQ-MyiWw-xhs9X_YUVWl1U",
    authDomain: "discord-clone-58b11.firebaseapp.com",
    projectId: "discord-clone-58b11",
    storageBucket: "discord-clone-58b11.appspot.com",
    messagingSenderId: "763409310482",
    appId: "1:763409310482:web:6386b0534b09e1c6fc49cb",
    measurementId: "G-NWS4CZPZBX"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  // const auth = firebase.auth();
  const auth = getAuth(app); //UPDATE
  // const provider = new firebase.auth.GoogleAuthProvider();
  const provider = new GoogleAuthProvider();//UPDATE

  export { auth, provider };
  export default db;

//   export default firebase;

