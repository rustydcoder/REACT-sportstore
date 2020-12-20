import React from "react";
import { Link } from "react-router-dom";

const ProductsRow = (props) => {
  const { id, name, category, price } = props.product;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td className="text-right">{price.toFixed(2)}</td>
      <td className="text-center">
        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={() => props.deleteProduct(id)}
        >
          Delete
        </button>
        <Link className="btn btn-sm btn-warning" to={`/admin/products/${id}`}>
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default ProductsRow;
