import React, {useState} from 'react'
import './navbar.css'
import house from '../Assets/image/modern-house.png'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';


const Navbar = () => {

    const { cartCount } = useCart();
    console.log('Cart Count:', cartCount);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleLogoClick(event) {
    event.stopPropagation(); 
}


  return (
    <div className={`my-navbar-container ${isMenuOpen ? 'change' : ''}`}>
        <div className="home-cart">
            <div className="logo" onClick={handleLogoClick}>
                <img src={house} alt="house"/>
                <Link to="/">Design May</Link>
            </div>
            <div className="nav-icons">
                <Link to="/cart"><HiOutlineShoppingBag size={24} />
                    <span className="count">({cartCount})</span>
                </Link>   
            </div>
        </div>
        <div className="nav-area">
            <nav className={`navbar ${isMenuOpen ? 'change' : ''}`}>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`line line-1 ${isMenuOpen ? 'change' : ''}` } ></div>
                    <div className={`line line-2 ${isMenuOpen ? 'change' : ''}` } ></div>
                </div>
                <ul className={`nav-list ${isMenuOpen ? 'change' : ''}`} >
                    <li className="nav-item" ><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/showroom" className="nav-link">Showroom</Link></li>
                    <li className="nav-item"><Link to="/project" className="nav-link">Project</Link></li>
                    <li className="nav-item"><Link to="/service" className="nav-link">Services</Link></li>
                    <li className="nav-item"><Link to=""><IoIosHeartEmpty size={24} className='icon'/></Link></li>
                    <li className="nav-item"><Link to=""><IoSearchOutline size={24} className='icon'/></Link></li>

                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar;