import React, { Fragment, useEffect } from 'react';
import CartItem from './CartItem.js';

const Cart = ({ cart, removeCartItem, toggleShowCart, toggleShowCheckout, grandTotal }) => {
  useEffect(() => {
    // console.log('cart mounted');
  }, [])
  return (
    <Fragment>
      <div className="cart-modal-bg" onClick={toggleShowCart} />
      <div className="cart-modal">
        <span className="cart-modal-close" onClick={toggleShowCart}>
          &times;
        </span>
        <div className="cart-wrapper">
          <h5>Cart</h5>
          {cart.length < 1 ? (
            <h3 style={{ textAlign: 'center' }}>Your cart is empty</h3>
          ) : (
            cart.map((item, i) => {
              return (
                <div key={i}>
                  <CartItem
                    key={i}
                    item={item}
                    removeCartItem={removeCartItem}
                    cartItemIndex={i}
                  />
                </div>
              );
            })
          )}
          <h5>
            Total: &#8369; {grandTotal}
          </h5>
          <button className="checkout" onClick={toggleShowCheckout}>Check out</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
