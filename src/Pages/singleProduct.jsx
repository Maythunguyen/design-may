import React from "react";
import ProductInfo from "../Components/CategoryProducts/ProductInfo";
import Footer from "../Components/Footer/footer";

function SingleProduct({ setCartCount }) {
    return (
      <div>
          <ProductInfo setCartCount={setCartCount}/>
          <Footer/>
      </div>
    )
  }
  
  export default SingleProduct;

