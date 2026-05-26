import { update_user } from "@/app/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: update_user,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

