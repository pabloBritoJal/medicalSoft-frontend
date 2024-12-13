// src/components/Auth/SignUpForm.tsx
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import googleIcon from "../../../images/icon/google_icon.svg";
import { signUpSchema } from "../../../schemas/signUpSchema";

import {
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  GOOGLE_SIGNUP_TEXT,
  PASSWORD_LABEL,
  PASSWORD_PLACEHOLDER_SIGNIN,
  SIGNUP_LINK_TEXT,
} from "../../../constants/constants";
import { SignUpData } from "../../../types/forms";
import { useAuthSignUp } from "../../../hooks/useAuth";
import CustomInputForm from "./CustomInputForm";
import { handleError } from "../utils/handleError";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPass } from "../../../store/auth/thunks";
import { AppDispatch, RootState } from "../../../store/store";
import ErrorMessage from "../../../components/ErrorMessage";

interface SignUpFormProps {
  toggle: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ toggle }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const { status , errorMessage } = useSelector((state: RootState) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = async (data: SignUpData) => {
    try {
      await dispatch(
        startCreatingUserWithEmailPass({
          email: data.email,
          password: data.password,
          displayName: data.name,
        })
      );
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <form className="w-full px-10" onSubmit={handleSubmit(onSubmit)} noValidate>
      <CustomInputForm
        label="Name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        icon={<MdPerson />}
        control={control}
        error={errors.name}
      />

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
        type="password"
        placeholder={PASSWORD_PLACEHOLDER_SIGNIN}
        icon={<FaLock />}
        control={control}
        error={errors.password}
      />

      <CustomInputForm
        label="Confirm Password"
        name="retypePassword"
        type="password"
        placeholder="Re-enter your password"
        icon={<FaLock />}
        control={control}
        error={errors.retypePassword}
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold border border-blue-500 hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          disabled={false}
        >
          {isAuthenticating ? "Signing Up..." : SIGNUP_LINK_TEXT}
        </button>
      </div>

      <button
        type="button"
        className="mt-4 w-full flex items-center justify-center gap-3.5 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        aria-label="Continue with Google"
      >
        <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
        {GOOGLE_SIGNUP_TEXT}
      </button>

      <div className="mt-6 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => toggle()}
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
