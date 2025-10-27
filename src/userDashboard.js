// src/userDashboard.js
import { useEffect, useState } from 
"react"; import { View, Text, Button } 
from "react-native"; import { doc, 
onSnapshot, updateDoc } from 
"firebase/firestore"; import { auth, 
db } from "./firebaseConfig"; const 
UserDashboard = () => {
  const [earnings, setEarnings] = 
  useState(0); const [smsSent, 
  setSmsSent] = useState(0); 
  useEffect(() => {
    const user = auth.currentUser; if 
    (user) {
      const unsubscribe = 
      onSnapshot(doc(db, "users", 
      user.uid), (doc) => {
        const data = doc.data(); 
        setEarnings(data.earnings); 
        setSmsSent(data.smsSent);
      });
      return () => unsubscribe();
    }
  }, []);
  const handleWithdraw = async () => { 
    const user = auth.currentUser; if 
    (user && smsSent >= 100) {
      await updateDoc(doc(db, "users", 
      user.uid), {
        earnings: 0, smsSent: 0
      });
    }
  };
  return ( <View> <Text>Earnings: 
      ${earnings.toFixed(2)}</Text> 
      <Text>SMS Sent: {smsSent}</Text> 
      <Button
        title="Withdraw" 
        onPress={handleWithdraw} 
        disabled={smsSent < 100}
      /> </View> );
};
export default UserDashboard;
