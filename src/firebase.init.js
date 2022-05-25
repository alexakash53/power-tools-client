// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVBsdJndeu2q2yPaXrCJZi0o9iI4l7ac",
  authDomain: "power-tools-92939.firebaseapp.com",
  projectId: "power-tools-92939",
  storageBucket: "power-tools-92939.appspot.com",
  messagingSenderId: "458655481232",
  appId: "1:458655481232:web:3ec14af13195d143f7c715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
