import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdMail } from "react-icons/io";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import googleIcon from "../../../images/icon/google_icon.svg";
import { signInSchema } from "../../../schemas/signInSchema";
import { SignInData } from "../../../types/forms";
import CustomInputForm from "./CustomInputForm";
import {
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  GOOGLE_SIGNIN_TEXT,
  NO_ACCOUNT_TEXT,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER_SIGNIN,
  SIGN_IN_TEXT,
  SIGNUP_LINK_TEXT,
} from "../../../constants/constants";
import {
  startGoogleSignIn,
  startLoginWithEmailPass,
} from "../../../store/auth/thunks";
import { AppDispatch, RootState } from "../../../store/store";
import ErrorMessage from "../../../components/ErrorMessage";

interface SignInFormProps {
  toggle: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ toggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });
  const dispatch = useDispatch<AppDispatch>();

  const { status , errorMessage} = useSelector((state: RootState) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = async (data: SignInData) => {
    try {
      await dispatch(startLoginWithEmailPass(data.email, data.password));
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  const onGoogleSignIn = () => {
    console.log("OnGoogleSigIn");
    dispatch(startGoogleSignIn());
  };

  console.log(isAuthenticating);

  return (
    <form className="w-full px-10" onSubmit={handleSubmit(onSubmit)} noValidate>
      <CustomInputForm
        label={EMAIL_LABEL}
        name="email"
        type="email"
        placeholder={EMAIL_PLACEHOLDER}
        icon={<IoMdMail />}
        control={control}
        error={errors.email}
      />

      <CustomInputForm
        label={PASSWORD_LABEL}
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder={PASSWORD_PLACEHOLDER_SIGNIN}
        icon={<FaLock />}
        control={control}
        error={errors.password}
        rightIcon={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
            className="focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        }
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-opacity-90 transition"
          disabled={isAuthenticating}
        >
          {isAuthenticating ? "Signing In..." : SIGN_IN_TEXT}
        </button>
      </div>

      <button
        onClick={() => {
          onGoogleSignIn();
        }}
        disabled={isAuthenticating}
        type="button"
        className="mt-4 w-full flex items-center justify-center gap-3.5 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        aria-label="Continue with Google"
      >
        <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
        {GOOGLE_SIGNIN_TEXT}
      </button>

      <div className="mt-6 text-center">
        <p className="text-gray-500">
          {NO_ACCOUNT_TEXT}{" "}
          <button
            onClick={() => {
              toggle();
            }}
            disabled={isAuthenticating}
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            {SIGNUP_LINK_TEXT}
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
