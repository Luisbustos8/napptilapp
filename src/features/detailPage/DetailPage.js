import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartButton } from "../../components/Buttons/ShoppingCartButton";
import  {ButtonSelector}  from "../../components/selectorTypeMobile/ButtonSelector";
import { useAddToCart } from "../../services/useAddToCart";
import { fetchIdFromLocalStorage, getProductById, useGetProductById, useGetProductDetail, useGetProductsIdWithCache } from "../../services/useGetProductDetail"
import { useGetProductsWithCache } from "../../services/useGetProducts";
import { useResponse } from "../../utils/useResponse";
import { MobileDetailDescription } from "./MobileDetailDescription";
import { MobileImageDetail } from "./MobileImageDetail";


export const DetailPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [selectedColor, SetSelectedColor] = useState("");
    const [ selectedStorage, setSelectedStorage] = useState("");

    const { data, isLoading, errorId } = useQuery(('productsId', params.id), () => {
        const localStorage = fetchIdFromLocalStorage(params.id);
        if (localStorage){
            return Promise.resolve(localStorage)
        }
        return getProductById(params.id)
    })  

    const handleSelectColor = (option) => {
        SetSelectedColor(option);
    };
    const handleSelectStorage = (storage) => {
        setSelectedStorage(storage)
    }


    const handleAddToCard =  () => {
        // try {
        //     mutate({
        //         id: params.id,
        //         colorCode: selectedColor,
        //         storageCode: selectedStorage
        //     })
            
        //     storeResponse('response')
        // } catch (errorMsg) {
        //     console.log(errorMsg)
        // }
    }


    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleBack = () => {
        navigate(-1)
    }
    
    

    return (
        <>
        <button onClick={handleBack}>pulsame</button>
        <div className="flex flex-wrap my-10 mx-10">
           
             <div className="w-full md:w-1/2 p-4">
                <MobileImageDetail image={data.imgUrl} name={data.model} />
            </div>
            <div className="w-full md:w-1/2 p-4">
                <MobileDetailDescription  productDetail={data}/>
            </div> 
            <div className="flex-1 border-4 py-10 px-10">
                <ButtonSelector options={data.options.colors} label={'color'} onSelect={handleSelectColor} selected={selectedColor} />
                <ButtonSelector options={data.options.storages} label={'storage'} onSelect={handleSelectStorage} selected={selectedStorage} />
                {!selectedColor || !selectedStorage ? <p className="mt-5 text-orange-400">Please choose a color and storage to add to cart</p> : null}
                <ShoppingCartButton disabled={!selectedColor || !selectedStorage}  onClick={handleAddToCard} color={selectedColor} storage={selectedStorage}/>
            </div>
        </div>
        </>
        
    )
}