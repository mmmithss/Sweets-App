import { useMutation, useQueryClient } from "@tanstack/react-query";
import { restock } from "../lib/api";

export const useRestock = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isPending, error } = useMutation({
    mutationFn: restock,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sweets"] });
    },
  });
  return { restock: mutate, data, isPending, error };
};
