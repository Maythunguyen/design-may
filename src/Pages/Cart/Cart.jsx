import React from 'react';
import { useCart } from '../../Components/contexts/CartContext';
import "./Cart.css";

function Cart() {

  const { cartItems } = useCart();
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
              <div>{item.quantity} </div>
              <div>${cleanPrice(item.priceProduct) * item.quantity}</div>
          </div>
        ))}

    
        <div className="total">
            <strong>Total: {total.toFixed(2)}</strong>

        </div>
      
    </div>
  )
}

export default Cart;
