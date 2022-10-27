import React from "react";
import app from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

// * firebase auth
const auth = getAuth(app);

// * auth context
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //* create new user with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //* auhenticate with provider
  const authenticateWithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //* update user profile
  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.createUser, {
      displayName:name, 
      photoURL:photoURL
    });
  };
  //* login with email & password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //* logout user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    authenticateWithProvider,
    updateUserProfile,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
