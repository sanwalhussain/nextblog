import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC1qkh80bgByJ830oLGoheqKhS1XRYcdUE",
    authDomain: "blogpost-37ec4.firebaseapp.com",
    projectId: "blogpost-37ec4",
    storageBucket: "blogpost-37ec4.appspot.com",
    messagingSenderId: "955586200752",
    appId: "1:955586200752:web:18db4bed7b9705f6d96775",
    measurementId: "G-4J6VKYT2CT"
  };

var app;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export const storage = getStorage(app);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
