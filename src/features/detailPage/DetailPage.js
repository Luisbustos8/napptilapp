import { useState } from "react";
import { useParams } from "react-router-dom";


import ButtonGroup from "../../components/selectorTypeMobile/Selector";
import { useGetProductDetail } from "../../services/useGetProductDetail"
import { MobileDetailDescription } from "./MobileDetailDescription";
import { MobileImageDetail } from "./MobileImageDetail";


export const DetailPage = () => {
    const params = useParams()
    const { productDetail, isLoading, error } = useGetProductDetail(params.id);
    const [selectedColor, SetSelectedColor] = useState("");
    const [ selectedStorage, setSelectedStorage] = useState("");


    const handleSelectColor = (option) => {
        SetSelectedColor(option);
    };
    const handleSelectStorage = (storage) => {
        setSelectedStorage(storage)
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
            <div className="flex-1  bg-gray-400 mt-4">
                <ButtonGroup options={productDetail.options.colors} label={'color'} onSelect={handleSelectColor} selected={selectedColor} />
                <ButtonGroup options={productDetail.options.storages} label={'storage'} onSelect={handleSelectStorage} selected={selectedStorage} />
            </div>
            
        </div>
        
    )
}