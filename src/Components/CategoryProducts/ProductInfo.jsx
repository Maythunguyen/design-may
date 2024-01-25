import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import categoryDetails from '../Showroom-category/categoryDetail';
import "./ProductInfo.css";
import { BsDash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";


function ProductInfo({ setCartCount }) {
    const [count, setCount] = useState(0);
    
    function addToCart() {
      if (count === 0) {
        setCount(1)
        // If count is 0, add 1 to cart
        setCartCount(prevCount => prevCount + 1);
      } else {
        // Add the current count value to cart count
        setCartCount(prevCount => prevCount + count);
      }
    }


    function decrease(){
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
      }
    }
    function increase() {
      setCount(prevCount => prevCount + 1);
    }
    const { productId } = useParams();
    const product = categoryDetails.flatMap(category => category.products).find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-containter">
      <div className="product-detail">
        <h1>{product.nameProduct}</h1>
        <p>{product.infoProduct}</p>
        <h3>{product.priceProduct}</h3>
        
        <div className="btn">
          <div className="minus-plus">
              <button onClick={decrease} className="minus-btn"><BsDash /></button>
              <button className="num-btn">{count}</button>
              <button onClick={increase} className="plus-btn"><GoPlus /></button>
          </div>
          <div>
            <button class="main-btn" onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </div> 
      <div className="product-img">
        <img src={product.imgProduct} alt={product.nameProduct} />
      </div> 
    </div>
  )
}

export default ProductInfo;
