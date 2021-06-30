import firebase from 'firebase'
require("@firebase/firestore")


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCvtQKI5DvGbUgFI7pdceX5JzbB3qMnaSQ",
    authDomain: "story-bffe4.firebaseapp.com",
    projectId: "story-bffe4",
    storageBucket: "story-bffe4.appspot.com",
    messagingSenderId: "257396589761",
    appId: "1:257396589761:web:523982222f038d61b88040"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()