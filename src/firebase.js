// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDYOq3QZWMm0s7AoxeweFVm81rWeWw0etc",
    authDomain: "housnow-d1432.firebaseapp.com",
    projectId: "housnow-d1432",
    storageBucket: "housnow-d1432.appspot.com",
    messagingSenderId: "824886527363",
    appId: "1:824886527363:web:67182fe23763fe9ca8e2b6"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;