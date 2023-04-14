// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUr-DeuYGmzWNaoJce6ASCnaMNolLZAM",
  authDomain: "my-pos-system-32516.firebaseapp.com",
  projectId: "my-pos-system-32516",
  storageBucket: "my-pos-system-32516.appspot.com",
  messagingSenderId: "308439157751",
  appId: "1:308439157751:web:ad16024238280ecf2ebcf2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);