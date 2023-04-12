import SHOPPING from '../../assets/icons/shopping.png'
import { useAddToCart } from '../../services/useAddToCart'


export const ShoppingCartButton = ({disabled, onClick, color, storage}) => {

    console.log(color, storage)

    const { mutate, isLoading, isError, error } = useAddToCart()

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(isLoading)
       await mutate({
            id: '8hKbH2UHPM_944nRHYN1n',
            colorCode: color,
            storageCode: storage
        })
    }

    return (
        <div className='mt-10'>
            <button 
                className={`${disabled ? 'bg-slate-400 text-slate-200 flex py-2 px-4 rounded md:py-3 md:px-6 md:text-lg' : 'bg-cyan-500 hover:bg-cyan-800 flex text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg'}`}
                onClick={ (e) => handleClick(e)}
                disabled={true}
                type='submit'
            >
               {!disabled &&<img src={SHOPPING} className='w-8 h-6 pt-1 pr-3 fill-slate-200'/> }
                Add to cart
            </button>
        </div>
    )   
}