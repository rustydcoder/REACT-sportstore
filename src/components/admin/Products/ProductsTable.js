import React from "react";
import { Link } from "react-router-dom";
import PaginationControls from "../../pagination/PaginationControls";
import ProductsRow from "./ProductsRow";

const ProductsTable = (props) => {
  const deleteItem = (id) => {
    props.deleteProduct(id);
  };
  return (
    <div>
      <h4 className="bg-info text-white text-center p-2">
        {props.totalSize} Products
      </h4>
      <PaginationControls keys={["ID", "Name", "Category"]} {...props} />
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th className="text-right">Price</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((prod) => (
            <ProductsRow
              key={prod.id}
              product={prod}
              deleteProduct={deleteItem}
            />
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link className="btn btn-primary" to="/admin/products/create">
          Create Product
        </Link>
      </div>
    </div>
  );
};

export default ProductsTable;
