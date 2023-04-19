import { DefaultOptions, QueryClient } from "react-query";

export const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ DefaultOptions: queryConfig });