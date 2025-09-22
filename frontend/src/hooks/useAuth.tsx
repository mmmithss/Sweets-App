import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/Axios";

export interface AuthUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthUserResponse {
  name: string;
  email: string;
  isAdmin: boolean;
}

export const useAuthUser = () => {
  const { data, isPending } = useQuery<AuthUserResponse>({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get<AuthUserResponse>("/auth/me");
      console.log(res.data);
      return res.data;
    },
    retry: false,
  });

  return {
    isLoading: isPending,
    authUser: data, // AuthUser | undefined
  };
};

export default useAuthUser;
