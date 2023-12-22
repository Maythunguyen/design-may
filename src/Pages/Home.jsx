import React from 'react';
import Header from '../Components/Home-header/header';
import Phylosophy from '../Components/Philosophy/philosophy';
import Footer from '../Components/Footer/footer';
import scrollProducts from '../Components/Home-product/scroll-product';
import Card from '../Components/Home-product/Card';
import '../Components/Home-product/card.css';

function Home() {
  return (
    <div>
    <Header/>
    <Phylosophy/>
    <div className="product-section">
      <div className="product-title">
              <h1 className="feature">FEATURED</h1>
              <h1 className="procduct">PRODUCTS</h1>
          </div>
      <div className="scrolls">
      {scrollProducts.map(product => (
        <Card
          id = {product.id}
          key = {product.id}
          img = {product.imgURL}
          title={product.title}
          price={product.price}
      />
              
      ))}
      </div>
    </div>
  
    <Footer/>

    </div>
  )
}

export default Home;
