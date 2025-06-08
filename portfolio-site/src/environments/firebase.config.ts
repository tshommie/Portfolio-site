import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: 'AIzaSyAPxKd2bmg_gbDkTOZNGj_yAKwTL4K-i8s',
  authDomain: 'portfolio-site-9df6e.firebaseapp.com',
  projectId: 'portfolio-site-9df6e',
  storageBucket: 'portfolio-site-9df6e.firebasestorage.app',
  messagingSenderId: '1048886851367',
  appId: '1:1048886851367:web:d07354c27c7842c0649b02',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);