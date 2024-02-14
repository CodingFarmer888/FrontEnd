import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';
import ProductList from './ProductList';
import Footer from './Footer';
import Login from './Login';
import OrderList from './OrderList';
import ShippingCart from './ShippingCart';

import UserContext from '../context/UserContext';
import Customer from './Customer';

const App = () => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Header user={user}/>
                <Menu user={user}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login user={user} setUser={setUser} />} />
                    <Route path="/productList" element={<ProductList />} />
                    <Route path="/shippingCart" element={<ShippingCart />} />
                    <Route path="/orderList" element={<OrderList />} />
                    <Route path="/customer" element={<Customer />} />

                </Routes>
                <Footer />
            </Router>
        </UserContext.Provider>
    );
}

export default App;
