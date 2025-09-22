import type { AxiosError } from "axios";
import axiosInstance from "./Axios";

// Type for user returned by GET /auth/user
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

// GET authenticated user
export const getAuthUser = async (): Promise<AuthUser | null> => {
  try {
    const res = await axiosInstance.get<AuthUser>("/auth/user");
    return res.data as AuthUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Type for signup data
export interface SignUpData {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

// Type for API error response
export interface ApiError {
  message: string;
  [key: string]: any;
}

// POST signup
export const signup = async (data: SignUpData) => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<ApiError>;
    // Important: throw the error so React Query can catch it
    throw error.response?.data || { message: "Something went wrong" };
  }
};
interface LoginData {
  email: string;
  password: string;
}
export const login = async (data: LoginData) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<ApiError>;
    // Important: throw the error so React Query can catch it
    throw error.response?.data || { message: "Something went wrong" };
  }
};
