import { registerDoctor } from "../../apis/registerDoctor";
import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { AppDispatch } from "../store";
import { checkingCredentials, login, logout } from "./authSlice";

interface CheckingAuthPayload {
  email: string;
  password: string;
}

interface UserCredentials {
  email: string;
  password: string;
  displayName: string;
}

export const checkingAuthentication = ({
  email,
  password,
}: CheckingAuthPayload) => {
  console.log(email, password);
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (result.isNewUser) {
      await registerDoctor(
        result.displayName ?? "",
        result.email ?? "",
        result.token
      );
    }
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPass = ({
  email,
  password,
  displayName,
}: UserCredentials) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(checkingCredentials());

      const resp = await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

      const { ok, errorMessage, uid, token } = resp;

      await registerDoctor(displayName, email, token ?? "");

      if (!ok) {
        dispatch(logout({ errorMessage }));
        return;
      }

      dispatch(login({ uid, displayName, email, token }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(logout({ errorMessage: error.message }));
      } else {
        console.error("Unexpected error:", error);
        dispatch(logout({ errorMessage: "An unexpected error occurred." }));
      }
    }
  };
};

export const startLoginWithEmailPass = (email: string, password: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(checkingCredentials());
      const { ok, displayName, errorMessage, photoURL, uid, token } =
        await loginWithEmailPassword(email, password);
      if (!ok) {
        dispatch(logout({ errorMessage }));
        return;
      }
      dispatch(login({ uid, displayName, email, photoURL, token }));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(logout({ errorMessage: error.message }));
      } else {
        console.error("Unexpected error:", error);
        dispatch(logout({ errorMessage: "An unexpected error occurred." }));
      }
    }
  };
};

export const startLogout = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(checkingCredentials());
      await logoutFirebase();
      dispatch(logout(null));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(logout({ errorMessage: error.message }));
      } else {
        console.error("Unexpected error:", error);
        dispatch(logout({ errorMessage: "An unexpected error occurred." }));
      }
    }
  };
};
