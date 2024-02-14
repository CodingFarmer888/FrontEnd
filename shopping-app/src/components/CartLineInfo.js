import React from 'react';

const CartLineInfo = ({ info , removeProductFromCart}) => {
    const { productInfo, amount, quantity } = info;

    const removeProduct = () => {
        removeProductFromCart(productInfo.code);
    }
    return (
        <div className="product-preview-container">
            <ul>
                <li><img className="product-image" src={productInfo.imageUrl} alt=""/>
                </li>
                <li>商品編號：<span>{productInfo.code}</span>
                </li>
                <li>商品名稱：<span>{productInfo.name}</span></li>
                <li>單價：
                    <span className="price">{productInfo.price}</span>
                </li>
                <li>數量：{quantity}
                </li>
                <li>小計：
                    <span>{amount}</span>
                </li>
                <li>
                    <a onClick={removeProduct}>
                        刪除商品
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CartLineInfo;
