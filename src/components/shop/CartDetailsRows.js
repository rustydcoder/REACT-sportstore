import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCartQunatity,
  removeFromCart,
} from "../../data/actions/cartCreator";

const CartDetailsRows = (props) => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cart, cartPrice } = cartReducer;
  const dispatch = useDispatch();

  return !cart || cart.length === 0 ? (
    <tr>
      <td colSpan="5">Your cart is empty</td>
    </tr>
  ) : (
    <Fragment>
      {cart.map((item) => (
        <tr key={item.product.id}>
          <td>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(
                  updateCartQunatity(item.product, parseInt(e.target.value))
                )
              }
            />
          </td>
          <td> {item.product.name} </td>
          <td> ${item.product.price.toFixed(2)} </td>
          <td> ${(item.quantity * item.product.price).toFixed(2)} </td>
          <td>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeFromCart(item.product))}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}

      <tr>
        <th colSpan="3" className="text-right">
          Total:
        </th>
        <th colSpan="2"> ${cartPrice.toFixed(2)} </th>
      </tr>
    </Fragment>
  );
};

export default CartDetailsRows;
