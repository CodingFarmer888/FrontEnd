import React, { useLayoutEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { request } from '../utils/AxiosUtils';
import CartLineInfo from './CartLineInfo';
import EmptyCart from './EmptyCart';

const ShippingCart = () => {

    const [cartLineInfos, setCartLineInfos] = useState([]);
    const navigator = useNavigate();
    const location = useLocation();
    
    useLayoutEffect(() => {
        request(
            "GET",
            "shoppingCart"
        ).then(response => {
            let cartLineInfo = response.data;
            console.log(cartLineInfo);
            setCartLineInfos(cartLineInfo);
        });
    // 透過location判斷當下的是否需要重新Render
    }, [location]);

    const removeProductFromCart = (code) => {
        request(
            "DELETE",
            `shoppingCartRemoveProduct/${code}`
        ).then(response => {
            let cartLineInfo = response.data;
            console.log(cartLineInfo);
            setCartLineInfos(cartLineInfo);
        });
    }

    return (
        <>
            <div className="page-title">我的購物車</div>
            {
                (cartLineInfos && cartLineInfos.length === 0) && <EmptyCart />
            }

            {
                cartLineInfos && cartLineInfos.map(info => <CartLineInfo key={info.productInfo.code} info={info} removeProductFromCart={removeProductFromCart}/>)
            
            }
            {
                (cartLineInfos && cartLineInfos.length > 0 ) && (
                    <>
                        <div style={{clear: "both"}}></div>
                        <input className="button-update-sc" type="submit" value="修改數量" />
                        <a className="navi-item" onClick={() => {navigator("/customer")}}>輸入客戶訊息</a>
                        <a className="navi-item" onClick={() => {navigator("/productList")}}>繼續購買</a>
                    </>
                )
            }



        </>
    );
}

export default ShippingCart;
