import React from "react";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Showroom from "./Pages/Showroom";
import Products from "./Pages/Products";
import Project from "./Pages/Project";
import Service from "./Pages/Service";
import Cart from "./Pages/Cart/Cart";
import "./Components/Navbar/navbar.css";
import SingleProduct from "./Pages/singleProduct";
import { CartProvider } from './Components/contexts/CartContext';


function App() {
  // const [cartCount, setCartCount] = useState(() => {
  //   // Initialize cartCount from local storage
  //   const savedCartCount = localStorage.getItem('cartCount');
  //   return savedCartCount !== null ? parseInt(savedCartCount, 10) : 0;
  // });

  // useEffect(() => {
  //   // Update local storage when cartCount changes
  //   localStorage.setItem('cartCount', cartCount);
  // }, [cartCount]);


  
  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/category/:categoryName" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}


export default App;
