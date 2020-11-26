import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  getSummary = () => {
    const { cartItems, cartPrice } = this.props;

    if (cartItems > 0) {
      return (
        <span>
          {cartItems} item(s), ${cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart : (empty) </span>;
    }
  };

  getLinkClasses = () => `btn btn-sm bg-dark text-white
       ${this.props.cartItems === 0 ? "disabled" : ""}`;

  render = () => (
    <div className="float-right">
      <small>
        {console.log(this.props)}
        {this.getSummary()}
        <Link className={this.getLinkClasses()} to="/shop/cart">
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </small>
    </div>
  );
}
