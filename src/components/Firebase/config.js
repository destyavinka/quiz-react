import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyClzhi3s9LDqH1sek2jsWqiFqL7W3bAsqY",
  authDomain: "quiz-app-a2c89.firebaseapp.com",
  projectId: "quiz-app-a2c89",
  storageBucket: "quiz-app-a2c89.appspot.com",
  messagingSenderId: "732783678561",
  appId: "1:732783678561:web:49273d420ffbcae4af4620",
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init each service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }