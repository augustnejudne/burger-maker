import React, { useEffect } from 'react';
import bottomBun from '../assets/bottom-bun.svg';
import topBun from '../assets/top-bun.svg';

import ketchupImg from '../assets/ketchup.svg';
import mayoImg from '../assets/mayo.svg';

const CartItem = ({ item, removeCartItem, cartItemIndex }) => {
  useEffect(() => {
    // console.log('cartItem mounted');
  }, [])
  const { ketchup, mayo, orderBurger, orderPrice, orderQty } = item;

  const renderBurger = () => {
    return orderBurger.map(({ img, name }, i) => {
      return (
        <li key={i}>
          <img
            src={img}
            alt={name}
            width="100%"
            className={`burger-item ${name}`}
            style={{ zIndex: i * -1 }}
          />
        </li>
      );
    });
  };

  const renderCartItemBurger = () => {
    return (
      <ul className="burger cart-burger">
        <li>
          <img src={topBun} alt="top bun" width="100%" className={`top-bun`} />
        </li>
        <li>
          <ul className={`burger-items-wrapper`}>{renderBurger()}</ul>
        </li>
        <li className={`bottom-bun-wrapper`}>
          {mayo ? (
            <img src={mayoImg} alt="mayo" width="100%" className={`mayo`} />
          ) : null}
          {ketchup ? (
            <img
              src={ketchupImg}
              alt="ketchup"
              width="100%"
              className={`ketchup`}
            />
          ) : null}
          <img
            src={bottomBun}
            alt="bottom bun"
            width="100%"
            className={`bottom-bun`}
          />
        </li>
      </ul>
    );
  };

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-info">
        <div>
          <p>
            Qty: <strong>{orderQty}</strong>
          </p>
          <p>
            Price: <strong>&#8369;{orderPrice}</strong>
          </p>
        </div>
        <button onClick={() => removeCartItem(cartItemIndex)}>remove</button>
      </div>
      <div className="stage-wrapper">{renderCartItemBurger()}</div>
    </div>
  );
};

export default CartItem;
