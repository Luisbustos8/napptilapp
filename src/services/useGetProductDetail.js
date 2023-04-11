import { useQuery } from "react-query"


export const useGetProductDetail = (id) => {

 const { isLoading, error, data } = useQuery('product', () => {
        return fetch(`${process.env.REACT_APP_API_BASE}/api/product/${id}`).then((res) => res.json())
    })

    
    return {
        productDetail: data,
        isLoading, error
    }
}