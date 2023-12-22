import React from 'react';
import './category-card.css';

function CategoryCard(props) {
  return (
    <div className="category-card">
      <div className="category-detail">
        <img src={props.img} alt={props.title} className="category-img"/>
        <div className="category-text">
            <h3>{props.title}</h3>
        </div>
        <div className="category-icon">
            <img src={props.imgIcon}/>   
        </div>
      </div>
    </div>
  )
}

export default CategoryCard;
