// firebaseConfig.js
import { initializeApp } from 
"firebase/app"; import { getAuth } 
from "firebase/auth"; import { 
getFirestore } from 
"firebase/firestore"; const 
firebaseConfig = {
  apiKey: 
  "AIzaSyAC-5NIk6hTxU6kDDCaoJvlWc9dchXUXwQ", 
  authDomain: 
  "rupeedesk-135aa.firebaseapp.com", 
  projectId: "rupeedesk-135aa", 
  storageBucket: 
  "rupeedesk-135aa.firebasestorage.app", 
  messagingSenderId: "977708454299", 
  appId: 
  "1:977708454299:android:ec51c62c8053649a62513e"
};
const app = 
initializeApp(firebaseConfig); const 
auth = getAuth(app); const db = 
getFirestore(app);
export { auth, db };
