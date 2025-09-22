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

interface RestockData {
  quantity: number;
  id: string;
}
export const restock = async (data: RestockData) => {
  try {
    const res = await axiosInstance.put(`/sweets/${data.id}/restock`, {
      quantity: data.quantity,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    const error = err as AxiosError<ApiError>;
    // Important: throw the error so React Query can catch it
    throw error.response?.data || { message: "Something went wrong" };
  }
};

interface Sweet {
  name: string;
  category: string;
  price: number;
  image?: string;
  quantity: number;
}

export const getAllSweets = async () => {
  try {
    const req = await axiosInstance.get<Sweet[]>("/sweets");
    console.log(req);
    console.log(req.data);
    return req.data;
  } catch (error) {
    console.error(error);
  }
};
