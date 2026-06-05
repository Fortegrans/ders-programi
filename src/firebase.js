import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCZm64puyLd1QvrvqA_sJGOWff9CT5txPw",
  authDomain: "ders-programi-1406f.firebaseapp.com",
  projectId: "ders-programi-1406f",
  storageBucket: "ders-programi-1406f.firebasestorage.app",
  messagingSenderId: "143213417939",
  appId: "1:143213417939:web:0bacffbe2fdb507e720b26"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)