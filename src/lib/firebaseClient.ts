// lib/firebaseClient.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase (reuse existing app if one already exists)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore with long-polling auto-detection,
// so it works reliably on mobile networks and restrictive proxies
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
