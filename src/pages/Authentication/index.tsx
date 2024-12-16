import React, { useState } from "react";
import AuthPageLayout from "./components/AuthPageLayout";
import { SIGN_IN_TEXT, SIGN_UP_TEXT } from "../../constants/constants";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

const AuthPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <AuthPageLayout
      title={ isSignIn ? SIGN_IN_TEXT : SIGN_UP_TEXT}
      formComponent={
        isSignIn ? (
          <SignInForm
            toggle={toggleForm}
          />
        ) : (
          <SignUpForm
            toggle={toggleForm}
          />
        )
      }
      isSignIn={isSignIn}
    />
  );
};

export default AuthPage;
