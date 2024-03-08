import React, { createContext, useContext, useState, useEffect} from "react";
// import { saveCartToFirebase, loadCartFromFirebase } from '../firebaseOperations';





const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if(itemExists) {
                return prevItems.map(item =>
                    item.id === product.id ? {...item, quantity: item.quantity + quantity} : item
                    );
            }
            return [...prevItems, { ...product, quantity }];
        });
    };

    const value = {
        cartItems,
        addToCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}