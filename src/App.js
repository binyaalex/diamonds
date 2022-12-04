import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDetails from './components/productDetails/ProductDetails';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className={styles.allPages}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productdetails" element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
