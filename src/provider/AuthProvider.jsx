import { auth } from "@/firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleLogin = (email, pass) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const handleSignUp = (email, pass) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleSignOut = () => {
    setLoding(true);
    return signOut(auth);
  };
  const userUpdate = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const handleGoogleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, githubProvider);
  };
  useEffect(() => {
    // console.log(user);
  }, [user]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    handleLogin,
    handleSignUp,
    handleSignOut,
    user,
    loading,
    userUpdate,
    handleGoogleLogin,
    handleGithubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
