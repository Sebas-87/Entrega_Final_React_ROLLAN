import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPaxmWDaelHAdmmoPP_ih2YwaKwvWvghQ",
  authDomain: "cafeteria80s.firebaseapp.com",
  projectId: "cafeteria80s",
  storageBucket: "cafeteria80s.appspot.com",
  messagingSenderId: "484834593002",
  appId: "1:484834593002:web:557e6755f95243786d2f93"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)