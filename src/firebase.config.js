import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1D5HtlKkT8eupV_Y402U3WhnZ1s2Kokk",
  authDomain: "full-stack-food-delivery-app.firebaseapp.com",
  databaseURL: "https://full-stack-food-delivery-app-default-rtdb.firebaseio.com",
  projectId: "full-stack-food-delivery-app",
  storageBucket: "full-stack-food-delivery-app.appspot.com",
  messagingSenderId: "114991938272",
  appId: "1:114991938272:web:038f03792bf8aa2c7e2e85",
  measurementId: "G-HN2SWKZ7PG"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
