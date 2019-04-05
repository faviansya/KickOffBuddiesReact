import firebase from 'firebase/app';
import 'firebase/storage';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdU65D7Yj_DOPkf7IImrQBHjn3xde-xiw",
    authDomain: "kickoffbuddy-d8f2c.firebaseapp.com",
    databaseURL: "https://kickoffbuddy-d8f2c.firebaseio.com",
    projectId: "kickoffbuddy-d8f2c",
    storageBucket: "kickoffbuddy-d8f2c.appspot.com",
    messagingSenderId: "781835681955"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }

  