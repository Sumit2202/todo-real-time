import { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

import { useProxy } from "valtio/utils";
import { userProxy } from "./proxies";
import { emailValidator } from "./src/helpers/emailValidator";

export const useFirebaseAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const userState = useProxy(userProxy);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    if (user === null) {
      userState.user.uid = null;
      return;
    }
    userState.user.uid = user?.uid;
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return { initializing };
};

export const createUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  const isValidEmail = emailValidator(email);
  const isValidPassword = password?.length >= 8;
  if (isValidEmail.length === 0 && isValidPassword) {
    return auth().createUserWithEmailAndPassword(email, password);
  }

  return { isValidEmail, isValidPassword };
};

export const signIn = (email: string, password: string) => {
  const isValidEmail = emailValidator(email);
  const isValidPassword = password?.length >= 8;
  if (isValidEmail.length === 0 && isValidPassword) {
    return auth().signInWithEmailAndPassword(email, password);
  }

  return Promise.resolve({ isValidEmail, isValidPassword });
};
