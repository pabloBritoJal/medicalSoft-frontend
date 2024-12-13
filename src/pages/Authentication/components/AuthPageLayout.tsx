import React from "react";
import Portada from "../../../images/cards/portada.png";
import { SLOGAN_TEXT } from "../../../constants/constants";

interface AuthPageLayoutProps {
  title: string;
  formComponent: React.ReactNode;
}

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({
  title,
  formComponent,
}) => {
  return (
    <div className="flex justify-center items-center w-full md:h-screen bg-white xl:bg-transparent">
      <div className="flex flex-wrap items-start w-full h-screen md:h-5/6 min-h-5/6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg xl:px-4">
        <div className="hidden xl:flex w-full h-full xl:w-1/2 p-8 flex-col justify-center items-center">
          <p className="text-base text-gray-500 mt-4 max-w-md mx-auto text-center">
            {SLOGAN_TEXT}
          </p>
          <img
            src={Portada}
            className="mt-4 w-96 rounded-lg shadow-md"
            alt="Volunteer"
          />
        </div>
        <div className="w-full xl:w-1/2 flex flex-col justify-center items-center p-2 xl:p-4 border-l my-auto h-full">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
            {title}
          </h2>
          {formComponent}
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
