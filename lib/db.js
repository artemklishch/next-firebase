import firebase from "firebase/app";
import "firebase/firestore";

export function loadFirebase() {
  try {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };
    firebase.initializeApp(config, "next-firebase");
    firebase.firestore().settings({ timestampsInSnapshots: true });
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.log(`Firebase didn\'t initialized correctly: ${err.message}`);
    }
  }
  return firebase;
}
