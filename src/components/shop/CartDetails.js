import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLinkClasses } from "../helperFunc";
import CartDetailsRows from "./CartDetailsRows";

const CartDetails = (props) => {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems } = cart;

  return (
    <div className="m-3">
      <h2 className="text-center">Your Cart</h2>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Product</th>
            <th className="text-right">Price</th>
            <th className="text-right">Subtotal</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <CartDetailsRows />
        </tbody>
      </table>

      <div className="text-center">
        <Link className="btn btn-primary m-1" to="/shop">
          Continue Shopping
        </Link>
        <Link className={getLinkClasses(cartItems, true)} to="/shop/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
