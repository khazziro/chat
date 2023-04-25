import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    // Unsubscribe from auth state changes when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Provide the AuthContext to children components
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
