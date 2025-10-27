// src/userPanel.js
import { useState } from "react"; 
import { sendSMS } from 
"./smsService"; import { auth } from 
"./firebaseConfig"; const UserPanel = 
() => {
  const [contact, setContact] = 
  useState(""); const [message, 
  setMessage] = useState(""); const 
  sendMessage = async () => {
    try { const user = 
      auth.currentUser; if (user) {
        await sendSMS(contact, 
        message, user.uid);
      }
    } catch (error) {
      console.error("Error sending 
      message:", error);
    }
  };
  return ( <div> <input type="text" 
        placeholder="Contact Number" 
        value={contact} onChange={(e) 
        => setContact(e.target.value)}
      /> <textarea value={message} 
        onChange={(e) => 
        setMessage(e.target.value)}
      /> <button 
      onClick={sendMessage}>Send 
      Message</button>
    </div> );
};
export default UserPanel;
