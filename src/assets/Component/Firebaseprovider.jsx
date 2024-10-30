/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {createContext } from "react";
import app from "./Firebase.config";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


 export const AuthContext = createContext(null)


const Firebaseprovider = ({children}) => {
  const auth=getAuth(app)
console.log(app);
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