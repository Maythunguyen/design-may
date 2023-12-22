import React from "react";
import "./philosophy.css";


function Phylosophy() {
    return (
        <div className="main-section">
            <div className="section-title">
                <h1 className="the">THE</h1>
                <h1 className="phylosophy">PHYLOSOPHY</h1>
            </div>
            <div className="section-img">
                <img className="small-height" src={"https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt=""/>
                <img className="big-height" src={"https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt=""/>
                <img className="small-height" src={"https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt=""/>
            </div>

            <div className="section-text">
                <p>Boho Minimalism: Embrace intentional simplicity within Bohemian spirit. Curate purposeful details, find beauty in subtle chaos, and create a harmonious space where expressive freedom meets tranquil minimalism.</p>

            </div>

            <div className="section-btn">
                <button>Read more +</button>

            </div>
        

        </div>
    );

    
}



export default Phylosophy;