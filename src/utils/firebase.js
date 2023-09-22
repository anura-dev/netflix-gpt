// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Xc46aTh-2kIcpZlE7bpwC89Ua-x1gp0",
  authDomain: "netflix-gpt-a04da.firebaseapp.com",
  projectId: "netflix-gpt-a04da",
  storageBucket: "netflix-gpt-a04da.appspot.com",
  messagingSenderId: "94605497942",
  appId: "1:94605497942:web:fc9baaab448d519b658df7",
  measurementId: "G-0FTP84GF0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();