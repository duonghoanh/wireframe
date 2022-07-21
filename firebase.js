// Import the functions you need from the SDKs you need
import  firebase from "firebase/app";
require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPNVItl_VzwUiJZK_yKautLGRFTIROaJI",
  authDomain: "wireframe-app-5a6e4.firebaseapp.com",
  databaseURL: "https://wireframe-app-5a6e4-default-rtdb.firebaseio.com",
  projectId: "wireframe-app-5a6e4",
  storageBucket: "wireframe-app-5a6e4.appspot.com",
  messagingSenderId: "1047472295924",
  appId: "1:1047472295924:web:3d53062cc638934bc373a1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };