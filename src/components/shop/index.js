import React from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import PaginationControls from "../pagination/PaginationControls";
import { useDispatch } from "react-redux";
import { setPageSize, setSortProperty } from "../../data/actions/loadCreator";

const Shop = (props) => {
  const { categories, products, history } = props;
  const dispatch = useDispatch();

  const setPage = (e) => dispatch(setPageSize(e));

  const setSortProp = (e) => dispatch(setSortProperty(e));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
          <CartSummary />
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-2">
          <CategoryNavigation
            baseUrl="/shop/products"
            categories={categories}
          />
        </div>

        <div className="col-9 p-2">
          <PaginationControls
            setSortProperty={setSortProp}
            setPageSize={setPage}
            history={history}
          />
          <ProductList products={products} history={history} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
