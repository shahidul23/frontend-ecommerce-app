import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Singup from './pages/Singup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TramAndCondition from './pages/TramAndCondition';
import SingleProduct from './pages/SingleProduct';

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='store' element={<OurStore />}/>
        <Route path='product/:id' element={<SingleProduct />}/>
        <Route path='blogs' element={<Blog />}/>
        <Route path='blog/:id' element={<SingleBlog />}/>
        <Route path='compare-product' element={<CompareProducts />}/>
        <Route path='wishlist' element={<Wishlist />}/>
        <Route path='login' element={<Login />}/>
        <Route path='forgot-password' element={<ForgetPassword />}/>
        <Route path='singup' element={<Singup />}/>
        <Route path='reset-password' element={<ResetPassword />}/>
        <Route path='privacy-policy' element={<PrivacyPolicy />}/>
        <Route path='refund-policy' element={<RefundPolicy />}/>
        <Route path='shipping-policy' element={<ShippingPolicy />}/>
        <Route path='tram-and-condition' element={<TramAndCondition />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
