// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

import "firebase/database"
//require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCP8MTyAwSYgx7UvZCkfrS1LHeigr_-I80",
  authDomain: "awesome-todo-cba09.firebaseapp.com",
  databaseURL: "https://awesome-todo-cba09.firebaseio.com",
  projectId: "awesome-todo-cba09",
  storageBucket: "awesome-todo-cba09.appspot.com",
  messagingSenderId: "69527096247",
  appId: "1:69527096247:web:4302c7f2464e6fa784b632",
  measurementId: "G-4GYKC0KQ2Y"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)

let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

