// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3cqw1g2rqQbiR_-8D4Ti26lNebN1EPAo",
  authDomain: "toy-cars-client-site.firebaseapp.com",
  projectId: "toy-cars-client-site",
  storageBucket: "toy-cars-client-site.appspot.com",
  messagingSenderId: "717505004608",
  appId: "1:717505004608:web:24ec39bbc1d95d1d720ba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;