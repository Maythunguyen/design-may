import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/showroom">Showroom</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/service">Services</Link></li>
                </ul>
            </div>

            <div className="footer-contact">
                <p><Link to="mailto:enquiry@designmay.com">Email: enquiry@designmay.com</Link></p>
                <p>Phone: +1 123 456 7890</p>
            </div>

            <div className="footer-media">

                <li><Link to="#" className="media"><FaFacebook /></Link></li>
                <li><Link to="#" className="media"><AiFillInstagram /></Link></li>
                <li><Link to="#" className="media"><FaPinterest /></Link></li>
                <li><Link to="#" className="media"><FaTwitter /></Link></li>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 Design May. All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer;