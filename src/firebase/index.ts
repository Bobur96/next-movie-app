import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8ezPIzbcmD2b_DQOWKnxzXo-NW9iSd3Q",
  authDomain: "next-movie-app-b613f.firebaseapp.com",
  projectId: "next-movie-app-b613f",
  storageBucket: "next-movie-app-b613f.appspot.com",
  messagingSenderId: "433980497975",
  appId: "1:433980497975:web:0c65a0115004f69282dfb2"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
