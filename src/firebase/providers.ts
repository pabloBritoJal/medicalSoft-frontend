import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { FirebaseError } from "firebase/app";
import { errorMessages } from "../constants/constants";

interface IRegisterUserWithEmailPassword {
  email: string;
  password: string;
  displayName: string;
}

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(FirebaseAuth, googleProvider);
    console.log('no se que hacer')
    console.log(userCredential.operationType);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = userCredential.user;

    const token = await userCredential.user.getIdToken();

    const additionalUserInfo = getAdditionalUserInfo(userCredential);

    const isNewUser = additionalUserInfo?.isNewUser;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
      token,
      isNewUser,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      errorMessage: error,
    };
  }
};

interface IRegisterUserWithEmailPassword {
  email: string;
  password: string;
  displayName: string;
}

interface RegisterResponse {
  ok: boolean;
  uid?: string;
  errorMessage?: string;
  token?: string,
}

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: IRegisterUserWithEmailPassword): Promise<RegisterResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    if (FirebaseAuth.currentUser !== null) {
      await updateProfile(FirebaseAuth.currentUser, { displayName });
    }

    const token = await userCredential.user.getIdToken();

    const { uid } = userCredential.user;
    return {
      ok: true,
      uid,
      token,
    };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      const getErrorMessage = (code: string): string => {
        return (
          errorMessages[code] ||
          "Ocurrió un error inesperado. Inténtelo de nuevo."
        );
      };
      return {
        ok: false,
        errorMessage: getErrorMessage(error.code),
      };
    }
    return {
      ok: false,
      errorMessage: "Ocurrió un error inesperado. Inténtelo de nuevo.",
    };
  }
};

export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential= await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { displayName, photoURL, uid } = userCredential.user;
    const token = await userCredential.user.getIdToken();
    return {
      ok: true,
      displayName,
      photoURL,
      uid,
      token,
    };
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      const getErrorMessage = (code: string): string => {
        return (
          errorMessages[code] ||
          "Ocurrió un error inesperado. Inténtelo de nuevo."
        );
      };
      return {
        ok: false,
        errorMessage: getErrorMessage(error.code),
      };
    }
    return {
      ok: false,
      errorMessage: "Ocurrió un error inesperado. Inténtelo de nuevo.",
    };
  }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}
