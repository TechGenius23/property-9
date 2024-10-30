/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {createContext } from "react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { appendErrors } from "react-hook-form";
import app from "./Firebase.config";
 export const AuthContext = createContext(null)


const Firebaseprovider = ({children}) => {
  const auth = getAuth(app);

  //creat user
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   
  };


  //sign in user
  const signinUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
  };

  const allvalue={
    creatUser,
    signinUser
  };
  return (
    <AuthContext.Provider value={allvalue}>
      {children}
    </AuthContext.Provider>
  );
};

export default Firebaseprovider;