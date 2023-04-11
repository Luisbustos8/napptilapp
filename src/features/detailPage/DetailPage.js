import { useParams } from "react-router-dom";
import { FormTypeMobile } from "../../components/forms/FormTypeMobile";
import { useGetProductDetail } from "../../services/useGetProductDetail"
import { MobileDetailDescription } from "./MobileDetailDescription";
import { MobileImageDetail } from "./MobileImageDetail";


export const DetailPage = () => {
    const params = useParams()
    const { productDetail, isLoading, error } = useGetProductDetail(params.id);

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
                <FormTypeMobile options={productDetail.options} />
            </div>
            
        </div>
        
    )
}