/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const userLogin = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const logOut = () => {
  //   return signOut(auth);
  // };

  const authInfo = {
    createNewUser,
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
