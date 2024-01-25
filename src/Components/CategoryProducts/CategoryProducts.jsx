import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categoryDetails from '../Showroom-category/categoryDetail';
import "./CategoryProducts.css";
import { IoIosHeartEmpty } from "react-icons/io";

function CategoryProducts() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const category = categoryDetails.find(cat => cat.title.trim() === categoryName);

  const viewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <div className="products-list">
        {category.products.map(product => (
          <div className="product-card" key={product.nameProduct}>
                <img src={product.imgProduct} alt={product.nameProduct} className="product-img" />
            <hr></hr>
            <div className="product-name">
                <h3>{product.nameProduct}</h3>
            </div>
            <div className="product-price">
                <p>{product.priceProduct}</p>
            </div>
            <div class="card-btn">
                <button onClick={() => viewProduct(product.id)}>View Product</button>
                <IoIosHeartEmpty className="icon"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
