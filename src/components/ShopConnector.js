import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from "./shop";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../data/actions/loadCreator";
import { DataTypes } from "../data/constant/Types";
import Checkout from "./checkout";
import { filterProducts } from "./helperFunc";

const ShopConnector = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(DataTypes.CATEGORIES));
    dispatch(loadData(DataTypes.PRODUCTS));
  }, [dispatch]);

  const shopReducer = useSelector((state) => state.shopReducer);

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
      <Route
        path="/shop/cart"
        render={(routeProps) => <Checkout {...routeProps} />}
      />
      <Redirect to="/shop/products" />
    </Switch>
  );
};

export default ShopConnector;
