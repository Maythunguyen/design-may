import React from 'react';
import './category-card.css';

function CategoryCard(props) {
  return (
    <div className="category-card">
      <div className="category-detail">
        <img src={props.img} alt={props.title} className="category-img"/>
        <div className="category-title">
            <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard;
