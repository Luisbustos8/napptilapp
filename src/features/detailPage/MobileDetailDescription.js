import { DescriptionDetails } from "./DescriptionDetails"


export const MobileDetailDescription = ({productDetail}) => {

    return (
        <div className="flex flex-col">
            <div className="flex-1 h-1/2 border-4">  
                <DescriptionDetails productDetail={productDetail} />
            </div>
        </div>
    )
}