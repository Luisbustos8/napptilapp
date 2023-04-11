


export const ProductCard = (products) => {

    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {products.products.map(product => {
                return (
                    <div class="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-white hover:bg-neutral-300" key={product.id}>
                        <div className="flex justify-center">
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
            })}
        </div>
    )
}