import React, { Fragment } from 'react';
import CartItem from './CartItem.js';

const Cart = ({ cart, removeCartItem, toggleShowCart, toggleShowCheckout }) => {
  console.log(cart);

  const renderTotal = () => {
    if (cart.length === 0) {
      return 0;
    }
    if (cart.length === 1) {
      return cart[0].orderPrice;
    }
    return cart.reduce((a, b) => a.orderPrice + b.orderPrice);
  }
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
                <div>
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
            Total: &#8369; {renderTotal()}
          </h5>
          <button className="checkout" onClick={toggleShowCheckout}>Check out</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
