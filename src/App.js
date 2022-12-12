import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDetails from './components/productDetails/ProductDetails';
import MyOrders from './components/myOrders/MyOrders';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className={styles.allPages}>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
