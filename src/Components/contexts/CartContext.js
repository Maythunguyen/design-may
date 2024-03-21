import React, { createContext, useContext, useState, useEffect} from "react";


const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];

    });
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Cart Items Updated:', cartItems);
    }, [cartItems]);

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

    const updateItemQuantity = (productId, quantity) => {

        if(quantity < 1) {
            return removeItem(productId);
        }
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if(item.id === productId) {
                    return { ...item, quantity: quantity}
                }
                return item;
            });
        });
    };

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    const removeItem = (productId) => {
        setCartItems(prevItems => prevItems.filter(item =>item.id !== productId));
    };

    const value = {
        cartItems,
        addToCart,
        removeItem,
        updateItemQuantity,
        cartCount
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}