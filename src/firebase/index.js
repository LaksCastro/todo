import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import config from "./config";

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
