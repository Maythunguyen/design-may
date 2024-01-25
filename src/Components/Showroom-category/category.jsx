import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';
import CategoryCard from './category-card';
import categoryDetails from './categoryDetail';

function Category() {
  return (
    <div className="category-card-container">
        {categoryDetails.map(category => (
        <Link to={`/category/${category.title.trim()}`} key={category.key}>
        <CategoryCard
          id = {category.id}
          key = {category.id}
          img = {category.imgBackground}
          title={category.title}
      />
      </Link>
              
      ))}
    </div>
  )
}

export default Category;
