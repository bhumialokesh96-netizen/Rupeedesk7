// src/smsService.js
import { PermissionsAndroid, Platform 
} from "react-native";
import { NativeModules } from 
"react-native"; import { doc, 
updateDoc, increment } from 
"firebase/firestore"; import { db } 
from "./firebaseConfig"; const 
requestSMSPermissions = async () => {
  if (Platform.OS === "android") { 
    const granted = await 
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS, 
      {
        title: "SMS Permission", 
        message: "App needs access to 
        your SMS", buttonNeutral: "Ask 
        Me Later", buttonNegative: 
        "Cancel", buttonPositive: "OK"
      }
    ); if (granted === 
    PermissionsAndroid.RESULTS.GRANTED) 
    {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
const sendSMS = async (to, message, 
userId) => {
  try { const hasPermission = await 
    requestSMSPermissions(); if 
    (hasPermission) {
      await 
      NativeModules.SMSManager.sendSMS(to, 
      message); await 
      updateDoc(doc(db, "users", 
      userId), {
        smsSent: increment(1), 
        earnings: increment(0.20)
      });
    }
  } catch (error) {
    console.error("Error sending 
    SMS:", error);
  }
};
export { sendSMS };
