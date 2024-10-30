import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHRejSOfI7hiQ11yP6rCGO78N3Cd7jA4o",
  authDomain: "property-9-ba764.firebaseapp.com",
  projectId: "property-9-ba764",
  storageBucket: "property-9-ba764.firebasestorage.app",
  messagingSenderId: "1034417842828",
  appId: "1:1034417842828:web:7a70b815c6aa96cf1fa9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export default auth;