// src/auth.js
import { 
createUserWithEmailAndPassword, 
signInWithEmailAndPassword } from 
"firebase/auth"; import { auth, db } 
from "./firebaseConfig"; import { 
setDoc, doc } from 
"firebase/firestore"; export const 
registerUser = async (email, password, 
role) => {
  try { const userCredential = await 
    createUserWithEmailAndPassword(auth, 
    email, password); const user = 
    userCredential.user; await 
    setDoc(doc(db, "users", user.uid), 
    {
      email, role, earnings: 0, 
      smsSent: 0
    });
  } catch (error) {
    console.error("Error registering 
    user:", error);
  }
};
export const loginUser = async (email, 
password) => {
  try { await 
    signInWithEmailAndPassword(auth, 
    email, password);
  } catch (error) {
    console.error("Error logging in 
    user:", error);
  }
};
