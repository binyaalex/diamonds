import React, { useState } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";
import Shopping from "./components/shopping/Shopping";
import OrderSuccess from "./components/orderSuccess/OrderSuccess";
import MyOrders from "./components/myOrders/MyOrders";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import Business from "./components/signup/Business";
import Verify from "./components/signup/Verify";
import Account from "./components/settings/Account";

function App() {
  const [isUser, setIsUser] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header isUser={isUser} setIsUser={setIsUser} />
        <div className={styles.allPages}>
          <Routes>
            <Route path="/" element={<Home isUser={isUser} />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/shopping" element={<Shopping setIsUser={setIsUser} />} />
            <Route path="/ordersuccess" element={<OrderSuccess setIsUser={setIsUser} />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/business" element={<Business />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
