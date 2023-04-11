import { useGetProducts } from "../../services/useGetProducts"
import { ProductCard } from "./ProductCard";



export const HomeProduct = () => {


const { products, isLoading, error } = useGetProducts()


if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error!
        {error?.toString()}
      </div>
    );
  }


    return (<div className="my-10 mx-10">
        <ProductCard products={products}/>
    </div>)
}