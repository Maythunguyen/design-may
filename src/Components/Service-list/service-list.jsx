import React from 'react';
import { BsPersonVideo3 } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import './service-list.css';


function ServiceList() {
  return (
    <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col-md-6 p-lg-5 mx-auto my-5">
                <h1 className="display-3" style={{ fontWeight: 200 }}>OUR SERVICES</h1>
                <h4 className="text-muted mb-3" style={{ fontWeight: 'lighter' }}>Explore a curated selection of services designed to meet your specific requirements</h4>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="container-service">
            <div className="card">
                <BsPersonVideo3 className='icon'/>
                <h2>Consultant</h2>
                <p>Kickstart your design journey with a consultation tailored to your unique style and preferences.</p>
            </div>
            <div className="card">
                <BsCardChecklist className='icon'/>
                <h2>Consultant</h2>
                <p>We ensure every inch of your space is optimized for both aesthetics and functionality.</p>
            </div>
            <div className="card">
                <HiOutlineReceiptPercent className='icon'/>
                <h2>Action</h2>
                <p>Immerse yourself in the warmth of bohemian textiles and the simplicity of minimalistic furniture for a home that's uniquely yours.</p>
            </div>
        </div>
    </div>
  );
}

export default ServiceList;
