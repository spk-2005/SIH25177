// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCney00itzSQaRssp5R7kVaD97CvNkCOII",
  authDomain: "netflix-54671.firebaseapp.com",
  projectId: "netflix-54671",
  storageBucket: "netflix-54671.firebasestorage.app",
  messagingSenderId: "434614483592",
  appId: "1:434614483592:web:44aad0ef41a0f3a753bd3d"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
