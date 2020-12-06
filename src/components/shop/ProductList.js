import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../data/actions/cartCreator";

const ProductList = (props) => {
  const { products } = props;
  const dispatch = useDispatch();

  const addedToCart = (p) => {
    dispatch(addToCart(p));
  };

  if (!products || products.length === 0) {
    return <h5 className="p-2">No Products</h5>;
  }

  return products.map((p) => (
    <div className="card m-1 p-1 bg-light" key={p.id}>
      <h4>
        {p.name}

        <span className="badge badge-pill badge-primary float-right">
          ${p.price.toFixed(2)}
        </span>
      </h4>

      <div className="card-text bg-white p-1">
        {p.description}
        <button
          className="btn btn-success btn-sm float-right"
          onClick={() => addedToCart(p)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  ));
};

export default ProductList;
