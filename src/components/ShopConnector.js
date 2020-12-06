import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// imports from dataStore
import { loadData } from "../data/actions/loadCreator";
import { DataTypes } from "../data/constant/Types";

// Components
import Shop from "./shop";
import CartDetails from "./shop/CartDetails";
import DataGetter from "./DataGetter";
import Checkout from "./checkout";
import Thanks from "./checkout/Thanks";

const ShopConnector = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData(DataTypes.CATEGORIES));
  }, [dispatch]);

  const shopReducer = useSelector((state) => state.shopReducer);

  return (
    <Switch>
      <Redirect
        from="/shop/products/:category"
        to="/shop/products/:category/1"
        exact={true}
      />
      <Route
        path="/shop/products/:category/:page"
        render={(routeProps) => (
          <DataGetter loadData={loadData} {...routeProps} {...shopReducer}>
            <Shop {...shopReducer} {...routeProps} />
          </DataGetter>
        )}
      />
      <Route
        path="/shop/cart"
        render={(routeProps) => <CartDetails {...routeProps} />}
      />
      <Route
        path="/shop/checkout"
        render={(routeProps) => <Checkout {...routeProps} />}
      />
      <Route
        path="/shop/thanks"
        render={(routeProps) => <Thanks {...routeProps} />}
      />
      <Redirect to="/shop/products/all/1" />
    </Switch>
  );
};

export default ShopConnector;
