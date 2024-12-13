import { useState } from "react";
import { signUp } from "../services/authService";

export const useAuthSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    setError(null);
    // const response = await signIn({ email, password, usertype });

    // if (response.success) {
    //   //localStorage.setItem("token", response.token || "");
    //   const userId = response.data?.id.toString() ?? "";
    //   localStorage.setItem("userId", userId);
    //   return true;
    // } else {
    //   setError(response.message);
    //   return false;
    // }
    setLoading(false);
    console.log(email, password)
    return false
  };

  return { handleSignIn, loading, error };
};

export const useAuthSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (
    name: string,
    email: string,
    password: string,
  ) => {
    setLoading(true);
    setError(null);
    const response = await signUp({ name , email, password });

    if (response.success) {
      //localStorage.setItem("token", response.token || "");
      const userId = response.data?.id.toString() ?? "";
      localStorage.setItem("userId", userId);
      setLoading(false);
      return true;
    } else {
      setError(response.message);
      setLoading(false);
      return false;
    }
  };

  return { handleSignUp, loading, error };
};
