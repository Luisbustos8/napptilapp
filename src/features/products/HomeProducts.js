import {  useEffect, useState } from "react";
import { useQuery } from "react-query";
import { SearchBar } from "../../components/searcher/SearchBar";
import {  fetchFromlocalStorage, getProducts, useGetProduct } from "../../services/useGetProducts"
import { ProductCard } from "./ProductCard";



export const HomeProduct = () => {

  const [loading, setIsLoading ] = useState(true)


 
    const { isLoading, error, data: products} = useQuery('products', () => {
      const localStorage = fetchFromlocalStorage();
      if (localStorage) {
        return Promise.resolve(localStorage)
      }
      return getProducts()
    })

    const [ searchMobile, setSearchMobile ] = useState('')

    const handleSearch = (search) => {
      setSearchMobile(search)
    }

   

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
      <div class="my-10 mx-10">
          <SearchBar onSearch={handleSearch} products={products}/>
          <ProductCard products={products} mobile={searchMobile}/>
      </div>
    )
}