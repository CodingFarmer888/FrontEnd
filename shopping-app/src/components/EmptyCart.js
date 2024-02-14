import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {

    const navigator = useNavigate();
  return (
    <>
        <h2>沒有商品在購物車</h2>
        <a onClick={() => navigator("/productList")}>商品清單</a>
    </>
  );
}

export default EmptyCart;
