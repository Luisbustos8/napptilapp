

export const DescriptionDetails = ({productDetail}) => {
    console.log(productDetail)


  

    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{productDetail.brand} {productDetail.model}</h2>
            <p className="text-gray-700 font-bold mt-4">Characteristics:</p>
            <ul className="mt-2 leading-7">
                <li>CPU: {productDetail.cpu}.</li>
                <li>RAM: {productDetail.ram}.</li>
                <li>Operating system: {productDetail.os}.</li>
                <li>Screen resolution: {productDetail.displayResolution}, {productDetail.displaySize} and {productDetail.displayType}.</li>
                <li>Battery: {productDetail.battery}.</li>
                <li>Camera: {}.</li>
                <li>Dimentions:{productDetail.dimentions}</li>
                <li>Weight:{productDetail.weight}</li>
            </ul>
            <div className="flex flex-wrap justify-end items-end mt-4">
                <p className="text-2xl font-bold">{productDetail.price}€</p>
            </div>
        </div>
    )
}