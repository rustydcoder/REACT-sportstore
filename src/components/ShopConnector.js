import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./shop";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../data/actions/loadCreator";
import { DataTypes } from "../data/Types";

const ShopConnector = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(DataTypes.CATEGORIES));
    dispatch(loadData(DataTypes.PRODUCTS));
  }, [dispatch]);

  const shopReducer = useSelector((state) => state.shopReducer);

  const filterProducts = (products = [], category) =>
    !category || category === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <Switch>
      <Route
        path="/shop/products/:category?"
        render={(routeProps) => (
          <Shop
            {...shopReducer}
            {...routeProps}
            products={filterProducts(
              shopReducer.products,
              routeProps.match.params.category
            )}
          />
        )}
      />
      <Redirect to="/shop/products" />
    </Switch>
  );
};

{
  /* <Route path='/shop/cart' render={routeProps =>
<CartDetails {...routeProps} />} /> */
}

export default ShopConnector;
