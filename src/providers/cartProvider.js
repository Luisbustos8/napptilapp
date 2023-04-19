import React from "react";
import { useState } from "react";
import { CartContext } from "../utils/cartContext";


export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState(0)

    const addCart = (product) => {
        setCart(cart + product)
    }

    const value = {
        cart, addCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}