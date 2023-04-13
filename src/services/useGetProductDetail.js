

export const getProductById = async ( id) => {

    const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/product/${id}`)
    const data = await response.json();
    const dataWithExpiration = {
        data, 
        expiration: Date.now() + 1000 * 60 * 60,
    }
    localStorage.setItem(`/api/product/${id}`, JSON.stringify(dataWithExpiration))
    return data
}
    
export const fetchIdFromLocalStorage = (id) => {
    const dataWithExpiration = localStorage.getItem(`/api/product/${id}`);
    if (dataWithExpiration) {
        const { data, expiration } = JSON.parse(dataWithExpiration)
        if (Date.now() < expiration) {
            return data
        } else {
            localStorage.removeItem(`/api/product/${id}`)
        }
        return null
    }
}
