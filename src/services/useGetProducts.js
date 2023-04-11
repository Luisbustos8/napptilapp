import { useQuery } from "react-query"



export const useGetProducts = () => {
    const { isLoading, error, data } = useQuery('products', () => {
        return fetch(`${process.env.REACT_APP_API_BASE}/api/product`).then((res) => res.json())
    })

    return {
        products: data, 
        isLoading, error,  
    }
}