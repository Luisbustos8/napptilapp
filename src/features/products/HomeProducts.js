import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader/loader";
import { SearchBar } from "../../components/searcher/SearchBar";
import {  fetchFromlocalStorage, getProducts } from "../../services/useGetProducts"
import { ProductCard } from "./ProductCard";



export const HomeProduct = () => {
 
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

    if (error) {
      return <p>Opps something wrong!</p>
    }

    if (isLoading) {
        return <Loader />
    }
    
    
    return (
      <div class="my-10 mx-10">
          <SearchBar onSearch={handleSearch} products={products}/>
          <ProductCard products={products} mobile={searchMobile}/>
      </div>
    )
}