import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDzCe1OHhTMbJm8aOg9R6isVjG4RLGcEmE",
  authDomain: "reels-ig-clone.firebaseapp.com",
  databaseURL: "https://reels-ig-clone.firebaseio.com",
  projectId: "reels-ig-clone",
  storageBucket: "reels-ig-clone.appspot.com",
  messagingSenderId: "497847387150",
  appId: "1:497847387150:web:222080b1d649d30383a85f",
  measurementId: "G-TC9Q1X134B"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
