import React from 'react';
import CartItem from './CartItem.js';

const Cart = ({ cart, removeCartItem }) => {
  console.log(cart);
  return (
    <div className="cart-wrapper">
      <h5>Cart</h5>
      {cart.length === 0 ? (
        <h3 style={{ textAlign: 'center' }}>Your cart is empty</h3>
      ) : (
        cart.map((item, i) => {
          return (
            <CartItem
              key={i}
              item={item}
              removeCartItem={removeCartItem}
              cartItemIndex={i}
            />
          );
        })
      )}
    </div>
  );
};

export default Cart;
