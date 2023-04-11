import { useNavigate } from "react-router-dom";
import { NotFoundResults } from "../../components/NoFound/NotFoundResults";



export const ProductCard = ({products, ...props}) => {
    const navigate = useNavigate()
    const { mobile } = props
    const filteredItems = products.filter(item => item.brand.toLowerCase().includes(mobile.toLowerCase()) || item.model.toLowerCase().includes(mobile.toLowerCase()));

    const handleClick = (brand, id) => {
        navigate(`/${brand}/${id}`)
    }

    return (
        <>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {filteredItems.length > 0 ? filteredItems.map(product => {
                return (
                    <div class="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-white hover:bg-neutral-300" key={product.id} onClick={()=>handleClick(product.brand, product.id)}>
                        <div class="flex justify-center">
                            <img class="w-[100px] h-[150px] mt-2 bg-white  hover:bg-neutral-300" src={product.imgUrl} alt={product.imgUrl} />
                        </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{product.brand}</div>
                            <div class='flex'>
                                <p class="text-gray-700 font-bold">Model:</p>
                                <p class="text-gray-700 ml-2">{product.model}</p>
                            </div>
                            <div class='flex'>
                                <p class="text-gray-700 font-bold">Price:</p>
                                <p class="text-gray-700 ml-2">{product.price}</p>
                            </div>
                        </div>
                    </div>
                )
            }): <NotFoundResults />}
        </div>
        </>
    )
}