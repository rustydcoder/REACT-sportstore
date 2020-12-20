import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../data/actions/cartCreator";
import { placeOrder } from "../../data/actions/ordersCreator";
import ValidatedForm from "../form/ValidatedForm";

const Checkout = (props) => {
  const defaultAttrs = { type: "text", required: true };
  const formModel = [
    { label: "Name" },
    { label: "Email", attrs: { type: "email" } },
    { label: "Address" },
    { label: "City" },
    { label: "Zip/Postal Code", name: "zip" },
    { label: "Country" },
  ];

  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);

  const handleSubmit = (formData) => {
    const order = {
      ...formData,
      products: cartReducer.cart.map((item) => ({
        quantity: item.quantity,
        product_id: item.product.id,
      })),
    };

    dispatch(clearCart());
    dispatch(placeOrder(order));
    props.history.push("/shop/thanks");
  };

  const handleCancel = () => {
    props.history.push("/shop/cart");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
        </div>
      </div>

      <div className="row">
        <div className="col m-2">
          <ValidatedForm
            formModel={formModel}
            defaultAttrs={defaultAttrs}
            submitCallback={handleSubmit}
            cancelCallback={handleCancel}
            submitText="Place Order"
            cancelText="Return to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
