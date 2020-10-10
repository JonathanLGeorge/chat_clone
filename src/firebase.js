import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvSWoPsr1p94TwOTCgW3FeDYtUHjaQVzI",
  authDomain: "chat-clone-fd92b.firebaseapp.com",
  databaseURL: "https://chat-clone-fd92b.firebaseio.com",
  projectId: "chat-clone-fd92b",
  storageBucket: "chat-clone-fd92b.appspot.com",
  messagingSenderId: "1031347355805",
  appId: "1:1031347355805:web:d12658d065713dfd371474",
  measurementId: "G-5YTM1TQJ66",
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);

//data base
const db = firebaseAPP.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider }; //explicit
export default db;

//look up implicit and explicit exports?
