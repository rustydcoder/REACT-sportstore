import React from "react";

const OrderRow = (props) => {
  const { order, toggleShipped } = props;
  const { id, name, email, products, shipped } = order;

  const calcTotal = (products) =>
    products
      .reduce((total, p) => (total += p.quantity * p.product.price), 0)
      .toFixed(2);

  const getShipping = ({ shipped }) =>
    shipped ? (
      <i className="fa fa-shipping-fast text-success"></i>
    ) : (
      <i className="fa fa-exclamation-circle text-danger"></i>
    );

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td className="text-right">${calcTotal(products)}</td>
      <td className="text-center">
        <button
          className="btn btn-sm btn-block bg-muted"
          onClick={() => toggleShipped(order)}
        >
          {getShipping(order)}
          <span>{shipped ? "Shipped" : "Pending"}</span>
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
