import {  useState } from "react";
import { NotFoundResults } from "../../components/NoFound/NotFoundResults";
import { SearchBar } from "../../components/searcher/SearchBar";
import { useGetProducts } from "../../services/useGetProducts"
import { ProductCard } from "./ProductCard";



export const HomeProduct = () => {


const { products, isLoading } = useGetProducts()

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