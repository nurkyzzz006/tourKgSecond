import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/FireBase";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const googleProvider = new GoogleAuthProvider();

  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "GET_USER",
        payload: user,
      });
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  function logOutUser() {
    return signOut(auth);
  }

  const values = {
    signInWithGoogle,
    user: state.user,
    logOutUser,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
