import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLinkClasses } from "../helperFunc";

const CartSummary = (props) => {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems, cartPrice } = cart;

  const getSummary = () =>
    !cartItems || cartItems === 0 ? (
      <span>Your cart : (empty) </span>
    ) : (
      <span>
        {cartItems} item(s), ${cartPrice.toFixed(2)}
      </span>
    );

  return (
    <div className="float-right">
      <small>
        {getSummary()}
        <Link className={getLinkClasses(cartItems)} to="/shop/cart">
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </small>
    </div>
  );
};

export default CartSummary;
