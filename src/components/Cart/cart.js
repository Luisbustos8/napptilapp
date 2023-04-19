import { useContext } from 'react'
import CART from '../../assets/icons/shopping-cart.png'
import { CartContext } from '../../utils/cartContext'

export const Cart = () => {

    const  {cart}  = useContext(CartContext)
    
    return (
        <div className="relative mr-2">
            <img alt="shopping-cart" src={CART} className="w-8 sm:w-[30px] mr-4 mt-2" />
            {cart === 0 ? null : (
                <div className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{cart}</span>
                </div>
            )}
        </div>
    )
}