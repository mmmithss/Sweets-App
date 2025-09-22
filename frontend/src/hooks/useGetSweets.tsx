import { useQuery } from "@tanstack/react-query";
import { getAllSweets } from "../lib/api";

export const useGetSweets = () => {
  const {
    data: sweets,
    isPending,
    error,
  } = useQuery({
    queryKey: ["sweets"],
    queryFn: getAllSweets,
  });
  return { sweets, isPending, error };
};
