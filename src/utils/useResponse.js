import { useQueryClient  } from "react-query";

export const useResponse = (endPoint) => {
    const queryClient = useQueryClient();

    return queryClient.getQueriesData(['response', endPoint])
}