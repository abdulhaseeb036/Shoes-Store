
import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyC87WDYJUP52R2AuRoR8eWFqWryrXpufiU",
    authDomain: "shoesstoreonlinemart.firebaseapp.com",
    projectId: "shoesstoreonlinemart",
    storageBucket: "shoesstoreonlinemart.appspot.com",
    messagingSenderId: "152926745609",
    appId: "1:152926745609:web:586e7458ca117311f6f4d8",
    measurementId: "G-9MV17PH590"
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = (event) => {
   event.preventDefault()
    firebase.auth().signInWithPopup(provider);
  };



  export const signout = (event) => {
    event.preventDefault();
    firebase.auth().signOut()
  } 

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);