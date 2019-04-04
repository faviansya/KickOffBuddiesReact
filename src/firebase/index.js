import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTZKsgNzcouguMzF9PZQZrt-0dlVl5Kvk",
    authDomain: "kick-off-buddies-1553844690946.firebaseapp.com",
    databaseURL: "https://kick-off-buddies-1553844690946.firebaseio.com",
    projectId: "kick-off-buddies-1553844690946",
    storageBucket: "kick-off-buddies-1553844690946.appspot.com",
    messagingSenderId: "804587277905"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
    storage, firebase as default
  }

  