import React from "react";
import './card.css';
import { IoIosHeartEmpty } from "react-icons/io";

function Card(props) {
    return (
            <div className="card-product">
                <p>{props.id}</p>
                <img src={props.img} alt={props.title} className="card-img"/>
                <hr/>
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div  className="card-price">
                    <h3>{props.price}</h3>
                </div>
                <div className="card-btn">
                    <button>View Product</button>
                    <IoIosHeartEmpty className="icon"/>
                </div>
            </div>
    )

}

export default Card;