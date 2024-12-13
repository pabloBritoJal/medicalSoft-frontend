import { AxiosError } from "axios";
import api from "./axiosConfig";

export interface SignInResponse {
  success: boolean;
  message: string;
  data?: {
    name: string;
    email: string;
    password: string; // TODO Remover este Cambo
    phone: string | null;
    bio: string | null;
    skills: string | null;
    interests: string | null;
    id: number;
  };
  token?: string; // TODO AGERGAR token
}

export interface SignUpResponse {
  success: boolean;
  message: string;
  data?: {
    name: string;
    email: string;
    password: string; // TODO Remover este Cambo
    phone: string | null;
    bio: string | null;
    skills: string | null;
    interests: string | null;
    id: number;
  };
  token?: string; // TODO AGERGAR token
}

export interface SignUpResponse {
  success: boolean;
  message: string;
  token?: string;
}

export const signIn = async (data: {
  email: string;
  password: string;
}): Promise<SignInResponse> => {
  try {
    const response = await api.post("/api/volunteers", data);
    return {
      success: true,
      message: "Login successful",
      token: response.data.token,
    };
  } catch (error) {
    // Check if error is an AxiosError
    if (error instanceof AxiosError) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
    // Fallback for non-Axios errors
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};

export const signUp = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<SignUpResponse> => {
  try {
    const response = await api.post("/api/volunteers", data);
    return {
      success: true,
      message: "Registration successful",
      token: response.data.token,
    };
  } catch (error) {
    // Check if error is an AxiosError
    if (error instanceof AxiosError) {
      return {
        success: false,
        message:
          error.response?.data?.message || "An unexpected error occurred",
      };
    }
    // Fallback for non-Axios errors
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};
