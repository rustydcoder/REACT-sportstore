import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";
import Products from "./Products";
import ProductEditor from "./Products/ProductEditor";
import ProductCreator from "./Products/ProductCreator";
import { GraphQLUrl } from "../../data/constant/Urls";
import Orders from "./Orders";

const client = new ApolloClient({
  uri: GraphQLUrl,
});

const Admin = () => (
  <ApolloProvider client={client}>
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-info text-white">
          <div className="navbar-brand">SPORTS STORE</div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 p-2">
          <ToggleLink to="/admin/orders">Orders</ToggleLink>
          <ToggleLink to="/admin/products">Products</ToggleLink>
        </div>
        <div className="col-9 p-2">
          <Switch>
            <Route path="/admin/orders" component={Orders} />
            <Route path="/admin/products/create" component={ProductCreator} />
            <Route path="/admin/products/:id" component={ProductEditor} />
            <Route path="/admin/products" component={Products} />
            <Redirect to="/admin/orders" />
          </Switch>
        </div>
      </div>
    </div>
  </ApolloProvider>
);

export default Admin;
