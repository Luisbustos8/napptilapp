import { useMutation, useQueryClient } from "react-query"



export const useAddToCart = (e) => {
    console.log(e)
    const queryClient = useQueryClient()
    const mutation = useMutation((data) => {
        console.log(data)
        fetch(`${process.env.REACT_APP_API_BASE}/api/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
    });
    console.log(mutation)
    const { mutate } = mutation;
    
    const storeResponse = (response) => {
        
        queryClient.setQueryData(['response', ], response)
    }

    return { mutate, storeResponse }
}

