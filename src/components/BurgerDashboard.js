import React, { Component, Fragment } from 'react';
import Ingredients from './Ingredients';
import Stage from './Stage';
import Cart from './Cart';
import Checkout from './Checkout';

import bottomBun from '../assets/bottom-bun.svg';
import topBun from '../assets/top-bun.svg';

import ketchup from '../assets/ketchup.svg';
import mayo from '../assets/mayo.svg';

import bacon from '../assets/bacon.svg';
import cheese from '../assets/cheese.svg';
import egg from '../assets/egg.svg';
import lettuce from '../assets/lettuce.svg';
import patty from '../assets/patty.svg';
import tomato from '../assets/tomato.svg';

const ingredients = [
  {
    name: 'Patty',
    img: patty,
    price: 50,
  },
  {
    name: 'Bacon',
    img: bacon,
    price: 40,
  },
  {
    name: 'Egg',
    img: egg,
    price: 30,
  },
  {
    name: 'Cheese',
    img: cheese,
    price: 15,
  },
  {
    name: 'Lettuce',
    img: lettuce,
    price: 20,
  },
  {
    name: 'Tomato',
    img: tomato,
    price: 20,
  },
];

class BurgerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: ingredients,
      burger: [],
      ketchup: true,
      mayo: false,
      qty: 1,
      cart: [],
      dashBurgerPrice: 0,
      total: 0,
      showCart: false,
      showCheckout: false,
      itemAdded: false,
      grandTotal: 0,
    };
    this.qtyInput = React.createRef();
  }

  addPart = part => {
    const burgerCopy = this.state.burger;
    if (burgerCopy.length === 8) {
      return;
    }
    burgerCopy.unshift(part);
    this.setState({
      burger: burgerCopy,
      dashBurgerPrice: this.state.dashBurgerPrice + part.price,
    });
  };

  removePart = () => {
    const burgerCopy = this.state.burger;
    if (burgerCopy.length < 1) {
      return;
    }
    const removedPart = burgerCopy.shift();
    this.setState({
      burger: burgerCopy,
      dashBurgerPrice: this.state.dashBurgerPrice - removedPart.price,
    });
  };

  clear = () => {
    this.setState({ burger: [], dashBurgerPrice: 0 });
  };

  toggleKetchup = () => {
    this.setState({ ketchup: !this.state.ketchup });
  };

  toggleMayo = () => {
    this.setState({ mayo: !this.state.mayo });
  };

  handleQty = () => {
    this.setState({
      qty: this.qtyInput.current.value,
    });
  };

  handleAddToCart = () => {
    const orderQty = this.state.qty;
    const orderBurger = this.state.burger;
    const burgerPrice = this.state.dashBurgerPrice;
    const ketchup = this.state.ketchup;
    const mayo = this.state.mayo;
    const orderPrice = burgerPrice * orderQty;
    const grandTotal = this.state.grandTotal + orderPrice;
    if (orderQty < 1 || orderBurger.length < 1) {
      return;
    }
    this.setState(
      {
        burger: [],
        qty: 1,
        cart: [
          ...this.state.cart,
          {
            orderQty,
            orderBurger,
            orderPrice,
            ketchup,
            mayo,
          },
        ],
        dashBurgerPrice: 0,
        grandTotal,
      },
      () => {
        this.handleItemAdded();
      }
    );
  };

  handleItemAdded = () => {
    this.setState({ itemAdded: true });
    setTimeout(() => {
      this.setState({ itemAdded: false });
    }, 1000);
  };

  removeCartItem = i => {
    const cartCopy = this.state.cart;
    if (cartCopy.length < 1) {
      return;
    }
    cartCopy.splice(i, 1);
    this.setState({
      cart: cartCopy,
    });
  };

  toggleShowCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  toggleShowCheckout = () => {
    this.setState({ showCheckout: !this.state.showCheckout, showCart: false });
  };

  render() {
    return (
      <Fragment>
        <div className="main-title">
          <h1>Cloudy Burgers</h1>
        </div>
        <div className="main-wrapper">
          <button className="cart-button u-pull-right" onClick={this.toggleShowCart}>
            View Cart:&nbsp;
            {`${this.state.cart.length} item(s)`}
          </button>
          <div className="u-cf" />
          <div className="dashboard-wrapper">
            <Ingredients
              ingredients={ingredients}
              ketchup={this.state.ketchup}
              mayo={this.state.mayo}
              addPart={this.addPart}
              clear={this.clear}
              toggleKetchup={this.toggleKetchup}
              toggleMayo={this.toggleMayo}
            />
            <Stage
              burger={this.state.burger}
              topBun={topBun}
              bottomBun={bottomBun}
              mayo={this.state.mayo}
              mayoImg={mayo}
              ketchup={this.state.ketchup}
              ketchupImg={ketchup}
              removePart={this.removePart}
              dashBurgerPrice={this.state.dashBurgerPrice}
            />
          </div>
          <div className="itemAdded-wrapper">
            {this.state.itemAdded ? (
              <span className="itemAdded-notification">Item added to cart</span>
            ) : null}
          </div>
          <div className="addOrder">
            <label>
              Qty&nbsp;
              <input
                className="qty"
                type="number"
                min="0"
                max="100"
                value={this.state.qty}
                maxLength="3"
                ref={this.qtyInput}
                onChange={this.handleQty}
              />
            </label>
            <button
              className="addToCart"
              disabled={this.state.qty < 1 || this.state.burger.length < 1}
              onClick={() => this.handleAddToCart()}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {this.state.showCart ? (
          <Cart
            cart={this.state.cart}
            removeCartItem={this.removeCartItem}
            toggleShowCart={this.toggleShowCart}
            toggleShowCheckout={this.toggleShowCheckout}
            grandTotal={this.state.grandTotal}
          />
        ) : null}
        {this.state.showCheckout ? <Checkout toggleShowCheckout={this.toggleShowCheckout} /> : null}
      </Fragment>
    );
  }
}

export default BurgerDashboard;
