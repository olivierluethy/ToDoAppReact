import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEXoahdZ2XQwJTHESBal9dMhgdVknzrMg",
  authDomain: "react-todo-cd5a2.firebaseapp.com",
  databaseURL:
    "https://react-todo-cd5a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-todo-cd5a2",
  storageBucket: "react-todo-cd5a2.appspot.com",
  messagingSenderId: "407384044261",
  appId: "1:407384044261:web:81dacacf948048cc211a0c",
  measurementId: "G-4TLD3WD7LQ",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

export { db, dbRef };
