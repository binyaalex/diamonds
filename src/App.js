import React, { useState } from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDetails from './components/productDetails/ProductDetails';
import MyOrders from './components/myOrders/MyOrders';
import OrderSuccess from './components/orderSuccess/OrderSuccess';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

function App() {
  const [isUser, setIsUser] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Header isUser={isUser} setIsUser={setIsUser} />
        <div className={styles.allPages}>
          <Routes >
            <Route path="/" element={<Home isUser={isUser} setIsUser={setIsUser} />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/ordersuccess" element={<OrderSuccess />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
