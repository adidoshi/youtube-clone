import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaTXsTKWyZtLnamyo3oVoGsbwfZY5gVP8",
  authDomain: "ytclone-byadi.firebaseapp.com",
  projectId: "ytclone-byadi",
  storageBucket: "ytclone-byadi.appspot.com",
  messagingSenderId: "807915989424",
  appId: "1:807915989424:web:e84560e125085f37d00e75",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
