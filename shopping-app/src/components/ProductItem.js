import React from 'react';
import { request } from '../utils/AxiosUtils';

const ProductItem = ({ product }) => {
    const { code, name, price, imageUrl } = product;

    /**
     * 商品加入購物車
     */
    const addProductToCart = (event, code) => {
        event.preventDefault();
        console.log("addProductToCart Code: ", code);

        request(
            "POST",
            `cart/${code}`
        ).then(response => {
            console.log(response);
            alert("商品加入購物車成功");
        });
    }

    return (
        <>

            <div className="product-preview-container">
                <ul>
                    <li><img className="product-image" src={imageUrl} alt=""/></li>
                    <li>Code: <span>{code}</span></li>
                    <li>Name: <span>{name}</span></li>
                    <li>Price: <span>{price}</span></li>
                    <li>
                        <a onClick={(event) => addProductToCart(event, code)}>Buy Now</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ProductItem;
