import './App.css';
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Products from './Pages/Products';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import banner_men from '../src/Components/Assets/banner_mens.png'
import banner_women from '../src/Components/Assets/banner_women.png'
import banner_kids from '../src/Components/Assets/banner_kids.png'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />

          <Route path='/mens' element={<ShopCategory banner={banner_men} category="men"/>} />
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid"/>} />

          <Route path='/product' element={<Products />}>
            <Route path=':productId' element={<Products />} />
          </Route>
          <Route path='loginSignup' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
