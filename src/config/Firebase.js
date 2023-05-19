import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB4sjnBSTljTeE84lyCgu9jS-bQjSbKH3M",
  authDomain: "firstlook-bd97a.firebaseapp.com",
  projectId: "firstlook-bd97a",
  storageBucket: "firstlook-bd97a.appspot.com",
  messagingSenderId: "174650407375",
  appId: "1:174650407375:web:e3b3691247d1ffbf13faba",
  measurementId: "G-PWEQZ32HV5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)