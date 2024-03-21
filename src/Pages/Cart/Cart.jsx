import React from 'react';
import { useCart } from '../../Components/contexts/CartContext';
import "./Cart.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";




function Cart() {

  
  const { cartItems, removeItem, updateItemQuantity } = useCart();
  const cleanPrice = (price) => {
    return parseFloat(price.replace(/[^\d.-]/g, ''));
  }
  const total = cartItems.reduce((acc, item) => acc + cleanPrice(item.priceProduct) * item.quantity, 0);


  
  return (
    <div className="order-wrap">
      <div className="cart-header">
          <div>Product</div>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
  
        {cartItems.map(item => (
            <div className="cart-item" key={item.id || item.nameProduct}>
              <div className='product-img'><img src={item.imgProduct} alt={item.nameProduct}/></div>
              <div>{item.nameProduct}</div>
              <div> {item.priceProduct} </div>
              <div className='product-quantity'>
                <div><button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><FiMinusCircle/></button></div>
                <div className='quantity'>{item.quantity}</div>
                <div><button onClick={() => updateItemQuantity(item.id, item.quantity +1)}><GoPlusCircle/></button></div>
              </div>
              <div>${cleanPrice(item.priceProduct) * item.quantity}</div>
              <div className='remove' onClick={() => removeItem(item.id)}><IoTrashBinOutline /></div>
          </div>
        ))}

    
        <div className="total">
            <strong>Total: {total.toFixed(2)}</strong>

        </div>
      
    </div>
  )
}

export default Cart;
