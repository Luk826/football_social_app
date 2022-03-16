// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKzmRSTbuPf0og4RIRtIeHOtin_qU0OuY",
  authDomain: "football-app-auth.firebaseapp.com",
  projectId: "football-app-auth",
  storageBucket: "football-app-auth.appspot.com",
  messagingSenderId: "691812828433",
  appId: "1:691812828433:web:7292231f881a78af03f8b0",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
