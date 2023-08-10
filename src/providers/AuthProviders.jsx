import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        axios
          .post("https://burgry-server.vercel.app/jwt", {
            uid: currentUser?.uid,
          })
          .then((res) => {
            setLoading(false);
            localStorage.setItem("access-token", res.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(`https://burgry-server.vercel.app/role?uid=${user?.uid}`)
        .then((res) => {
          setRole(res?.data?.role);
        });
    }
  }, [user]);

  const userInfo = {
    role,
    user,
    createUser,
    signInUser,
    updateUser,
    logOut,
    googleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
