// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB291ibm6ckJZev4ajkzykZi1JosTmOaLc",
  authDomain: "mern-ecommerce-b1738.firebaseapp.com",
  projectId: "mern-ecommerce-b1738",
  storageBucket: "mern-ecommerce-b1738.firebasestorage.app",
  messagingSenderId: "614303873035",
  appId: "1:614303873035:web:f2d6e801490cd05afb6f0e",
  measurementId: "G-QZSVE3RJK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Auth
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();