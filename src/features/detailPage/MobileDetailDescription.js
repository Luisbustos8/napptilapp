import { DescriptionDetails } from "./DescriptionDetails"


export const MobileDetailDescription = ({productDetail}) => {

    return (
        <div className="flex flex-col">
            <div className="flex-1 h-1/2 bg-gray-200">  
                <DescriptionDetails productDetail={productDetail} />
            </div>
        </div>
    )
}