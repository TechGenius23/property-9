/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
// import app from "./Firebase.config";
import auth from "./Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);


// socialmedia provide
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const Firebaseprovider = ({ children }) => {
  //   const auth=getAuth(app)
  // console.log(app);
  const [user, setuser] = useState(null);
  console.log(user);


  //creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

  };


  //sign in user
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googlelogin

  const googlelogin = () => {
     return signInWithPopup(auth, googleprovider)
  };

  const githublogin = () => {
     return signInWithPopup(auth, githubprovider)
  };

  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user)
      };

    })
  }, []);


  const allvalue = {
    creatUser,
    signinUser,
    googlelogin,
    githublogin
  };


  return (
    <AuthContext.Provider value={allvalue}>
      {children}
    </AuthContext.Provider>
  )
};
export default Firebaseprovider;