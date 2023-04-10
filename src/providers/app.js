import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../utils/react-query";


export function AppProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}