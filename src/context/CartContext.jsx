import { createContext, useState } from "react";

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    const cardInitialState = JSON.parse(window.localStorage.getItem('cart'))
    const [cart, setCart] = useState(cardInitialState||[])

    const updateLocalStorage = (cart) =>
    {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    function addCart(product) {
        const productIndex = cart.findIndex((item) => item.id == product.id)

        if (productIndex >= 0) {
            const prevCart = structuredClone(cart)

            prevCart[productIndex].quantity += 1
            updateLocalStorage([...prevCart])
            return setCart([...prevCart])
        }


        setCart(prev => {
            const newState = [...prev,
            {
                ...product,
                quantity: 1
            }]

            updateLocalStorage(newState)
            return newState
        })
    }

    const clearCart = () => {
        setCart([])
    }

    const clearElement = (index) =>
    {
        updateLocalStorage([...cart.filter((_,i)=> i!== index)])
        setCart(()=>[...cart.filter((_,i)=> i!== index)])
    }

    const resolveQuantityElement = (product, plus = true) =>
    {
        
        const indexProduct= cart?.findIndex((item)=> item.id === product.id);

        if(!plus && (cart[indexProduct].quantity - 1) <= 0)
        {
            clearElement(indexProduct)
            return
        } 

        if(indexProduct >= 0)
        {
            const prevCart = structuredClone(cart)

            prevCart[indexProduct].quantity += plus ? 1 : - 1
            updateLocalStorage([...prevCart])
            setCart(prevCart)
        }
    }

    const updateQuantityElement = (product, value) =>
    {
        const indexProduct= cart?.findIndex((item)=> item.id === product.id);

        if(indexProduct >= 0)
        {
            const prevCart = structuredClone(cart)

            prevCart[indexProduct].quantity = parseInt(value) < 0 || value === '' ? 0 : parseInt(value)
            updateLocalStorage([...prevCart])
            setCart(prevCart)
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            clearCart,
            resolveQuantityElement,
            updateQuantityElement,
        }}>
            {children}
        </CartContext.Provider>
    )
}