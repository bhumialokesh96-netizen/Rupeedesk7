// src/adminPanel.js
import { useState } from "react"; 
import { sendSMS } from 
"./smsService"; import { db } from 
"./firebaseConfig"; import { 
collection, getDocs } from 
"firebase/firestore"; const AdminPanel 
= () => {
  const [message, setMessage] = 
  useState(""); const sendMessageToAll 
  = async () => {
    try { const usersSnapshot = await 
      getDocs(collection(db, 
      "users")); const users = 
      usersSnapshot.docs.map(doc => 
      doc.data()); for (const user of 
      users) {
        if (user.role === "user") { 
          await 
          sendSMS(user.phoneNumber, 
          message, user.uid);
        }
      }
    } catch (error) {
      console.error("Error sending 
      message to all users:", error);
    }
  };
  return ( <div> <textarea 
      value={message} onChange={(e) => 
      setMessage(e.target.value)} /> 
      <button 
      onClick={sendMessageToAll}>Send 
      to All Users</button>
    </div> );
};
export default AdminPanel;
