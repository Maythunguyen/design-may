import React from "react";
import { BsDash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import categoryDetails from "../Showroom-category/categoryDetail";

function CartShow() {

    return (
    <div>
        <div>
            <img>{imgProduct}</img>
            <h3>{nameProduct}</h3>
        </div>
        <div className="minus-plus">
              <button onClick={decrease} className="minus-btn"><BsDash /></button>
              <button className="num-btn">{count}</button>
              <button onClick={increase} className="plus-btn"><GoPlus /></button>
          </div>
        <div>

        </div>


    </div>
    )

}

export default CartShow;