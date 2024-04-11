import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBc9EYpaXJ1pzd6O4JaVsgZs2LwIvlLPdE",
    authDomain: "car-rental-webpage.firebaseapp.com",
    projectId: "car-rental-webpage",
    storageBucket: "car-rental-webpage.appspot.com",
    messagingSenderId: "893396057779",
    appId: "1:893396057779:web:86acb2c37fd8fcd597fac6",
    measurementId: "G-GSZVCZ9YJ5"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { firebaseConfig, analytics, auth };