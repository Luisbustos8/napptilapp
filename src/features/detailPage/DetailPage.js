import { useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartButton } from "../../components/Buttons/ShoppingCartButton";
import  {ButtonSelector}  from "../../components/selectorTypeMobile/ButtonSelector";
import { useAddToCart } from "../../services/useAddToCart";
import { useGetProductDetail } from "../../services/useGetProductDetail"
import { MobileDetailDescription } from "./MobileDetailDescription";
import { MobileImageDetail } from "./MobileImageDetail";


export const DetailPage = () => {
    const params = useParams()
    const { mutate, isLoading: isToCart, isError: cartError, error: errorMsg } = useAddToCart()
    const { productDetail, isLoading, error } = useGetProductDetail(params.id);
    const [selectedColor, SetSelectedColor] = useState("");
    const [ selectedStorage, setSelectedStorage] = useState("");

    

    
    const handleSelectColor = (option) => {
        SetSelectedColor(option);
    };
    const handleSelectStorage = (storage) => {
        setSelectedStorage(storage)
    }

  

    const handleAddToCard = async () => {
       
        try {
           await mutate({
                id: params.id,
                colorCode: selectedColor,
                storageCode: selectedStorage
            }) 
        } catch (errorMsg) {
            console.log(errorMsg)
        }
    }


    if (isLoading) {
        return <div>Loading...</div>;
      }
    

    return (

        <div className="flex flex-wrap my-10 mx-10">
            <div className="w-full md:w-1/2 p-4">
                <MobileImageDetail image={productDetail.imgUrl} name={productDetail.model} />
            </div>
            <div className="w-full md:w-1/2 p-4">
                <MobileDetailDescription  productDetail={productDetail}/>
            </div>
            <div className="flex-1 border-4 py-10 px-10">
                <ButtonSelector options={productDetail.options.colors} label={'color'} onSelect={handleSelectColor} selected={selectedColor} />
                <ButtonSelector options={productDetail.options.storages} label={'storage'} onSelect={handleSelectStorage} selected={selectedStorage} />
                {!selectedColor || !selectedStorage ? <p className="mt-5 text-orange-400">Please choose a color and storage to add to cart</p> : null}
                <ShoppingCartButton disabled={!selectedColor || !selectedStorage}  onClick={handleAddToCard} color={selectedColor} storage={selectedStorage}/>
            </div>
            
        </div>
        
    )
}