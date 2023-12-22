import React, {useState} from 'react'
import './navbar.css'
import house from '../Assets/image/modern-house.png'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleLogoClick(event) {
    event.stopPropagation(); 
}


  return (
    <div className={`my-navbar-container ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
        <div className="home-cart">
            <div className="logo" onClick={handleLogoClick}>
                <span><Link to="/"><img src={house} alt="house"/>Design May</Link></span>
            </div>
            <div className="nav-icons">
                <Link to="/cart"><HiOutlineShoppingBag size={24} /><span className="count">(0)</span></Link>   
            </div>
        </div>
        <div className="nav-area">
            <nav className={`navbar ${isMenuOpen ? 'change' : ''}`}>
                <div className="hamburger-menu" >
                    <div className={`line line-1 ${isMenuOpen ? 'change' : ''}` } onClick={toggleMenu}></div>
                    <div className={`line line-2 ${isMenuOpen ? 'change' : ''}` } onClick={toggleMenu}></div>
                </div>
                <ul className={`nav-list ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
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