// firebase.js - DeepBuild
// Duk sauran fayiloli suna shigo da app, auth, db daga nan.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyADxFOQ1vtMGHtaa1kKBRwYTK_CZ_YvuAQ",
  authDomain: "deepbuild-ai.firebaseapp.com",
  projectId: "deepbuild-ai",
  storageBucket: "deepbuild-ai.firebasestorage.app",
  messagingSenderId: "437150594307",
  appId: "1:437150594307:web:defa8b45fc14473e5b6536",
  measurementId: "G-QBKE8R7SRF"
};

export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
