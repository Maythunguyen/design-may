import React from 'react';
import "./header.css";
import BG from '../Assets/image/bg1.png';

function Header() {
  return (
    <div className="header">
        <div className="title">
            <h1 className="boho">BOHO</h1>
        </div>

        <div className="img">
            <img src={BG} alt="background"/>
            <div className="img-text">
                <h1>MINIMAL FUSION</h1>
            </div>

        </div>
    </div>
  );

}

export default Header;