import React, { Fragment, useEffect } from 'react';

const Checkout = ({ toggleShowCheckout }) => {
  useEffect(() => {
    // console.log('cart mounted');
  }, [])
  return (
    <Fragment>
      <div className="cart-modal-bg" onClick={toggleShowCheckout} />
      <div className="checkout-wrapper">
        <span className="cart-modal-close" onClick={toggleShowCheckout}>
          &times;
        </span>
        <form>
          <label>
            Name:
            <br />
            <input type="text" required />
          </label>
          <br />
          <label>
            Phone:
            <br />
            <input type="tel" required />
          </label>
          <br />
          <label>
            Address:
            <br />
            <textarea type="text" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default Checkout;
