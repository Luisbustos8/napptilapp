
export const getProducts = async () => {
  
    const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/product`);
    const data = await response.json()
    const dataWithExpiration = {
        data, 
        expiration: Date.now() + 1000 * 60 * 60,
    }
    localStorage.setItem('products', JSON.stringify(dataWithExpiration))
  
    return data
}

export const fetchFromlocalStorage = () => {
    const dataWithExpiration = localStorage.getItem('products');
    if (dataWithExpiration) {
        const { data, expiration } = JSON.parse(dataWithExpiration)
        if (Date.now() < expiration) {
            return data
        } else {
            localStorage.removeItem('products')
        }
        return undefined
    }
}