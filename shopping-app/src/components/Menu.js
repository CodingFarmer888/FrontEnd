import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Menu = ({user}) => {

    const navigate = useNavigate();

    const changeRoute = (router) => {
        navigate(router);
    }
    return (
        <div className="menu-container" >
            <a onClick={() => changeRoute("/")}>Home</a>
            |
            <a onClick={() => changeRoute("/productList")}>
                Product List
            </a>
            |
            <a onClick={() => changeRoute("/shippingCart")}>
                My Cart
            </a>
            |
            <a onClick={() => changeRoute("/orderList")}>
                Order List
            </a>
            |
            <a>
                Create Product
            </a>
            |
        </div>
    );
}

export default Menu;
