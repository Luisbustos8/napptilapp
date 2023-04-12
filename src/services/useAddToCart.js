import { useMutation } from "react-query"



export const useAddToCart = () => {

    return useMutation((data) => {
        fetch(`${process.env.REACT_APP_API_BASE}/api/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            }).then((response) => response.json());
        });
    

    // const [mutate, { isLoading , isError, error }] = useMutation((data) => {
    //     return fetch('/api/my-endpoint', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(data),
    //     }).then((response) => response.json());
    //   });
    // return { mutate, isLoading, isError, error };
}