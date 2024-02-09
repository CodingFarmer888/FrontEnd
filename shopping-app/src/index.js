import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Login from './components/Login';
import OrderList from './components/OrderList';
import ShippingCart from './components/ShippingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Header />
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/shippingCart" element={<ShippingCart />} />
            <Route path="/orderList" element={<OrderList />} />

        </Routes>
        <Footer />
    </Router>
);
