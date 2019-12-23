import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./secret/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
