import { QueryClient } from "@tanstack/react-query";

const STALE_TIME = 1000 * 60 * 60;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: STALE_TIME,
    },
  },
});
