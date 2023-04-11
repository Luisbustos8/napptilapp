import { useGetProducts } from "../../services/useGetProducts"



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


    return (<div>
        {!products ? <p>Loading</p> : products.map(el => {
            return <p>{el.brand}</p> 
        })}
    </div>)
}