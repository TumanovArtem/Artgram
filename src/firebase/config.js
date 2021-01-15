import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_VOCgLrawfnyjAATkhZfiHtNelqAhnjw",
    authDomain: "artgram-54b2e.firebaseapp.com",
    projectId: "artgram-54b2e",
    storageBucket: "artgram-54b2e.appspot.com",
    messagingSenderId: "55673699316",
    appId: "1:55673699316:web:06fc32a2abdb3ecb88d7a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };