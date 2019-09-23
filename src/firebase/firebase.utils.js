import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhbb5AgM9_mhrhczwXoeRzzqZ-yQHduWc",
  authDomain: "crwn-db-d2820.firebaseapp.com",
  databaseURL: "https://crwn-db-d2820.firebaseio.com",
  projectId: "crwn-db-d2820",
  storageBucket: "",
  messagingSenderId: "5583039592",
  appId: "1:5583039592:web:dd8ce7a4448989c5289fdd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
