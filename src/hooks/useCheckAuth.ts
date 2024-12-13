import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

function useCheckAuth() {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(null));

      try {
        const token = await user.getIdToken();

        const { displayName, uid, photoURL, email } = user;

        dispatch(login({ displayName, uid, photoURL, email, token }));
      } catch (error) {
        console.error("Error getting user token:", error);
      }
    });
  }, []);
  return {
    status,
  };
}

export default useCheckAuth;
