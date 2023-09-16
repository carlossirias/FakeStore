import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart()
{
    const {cart, addCart, clearCart, resolveQuantityElement, updateQuantityElement} = useContext(CartContext)

    if(cart === undefined)
    {
        throw new Error('UseCart must be used within a CartProvider')
    }
    const hasCart = cart.length > 0
    
    return {cart, addCart: addCart, clearCart: clearCart, resolveQuantityElement, updateQuantityElement,  hasCart}
}