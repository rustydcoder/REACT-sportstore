import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShopConnector from "./components/ShopConnector";
import Admin from "./components/admin";
import AuthProviderImpl from "./components/auth/AuthProviderImpl";

const App = (props) => (
  <AuthProviderImpl>
    <Router>
      <Switch>
        <Route path="/shop" component={ShopConnector} />
        <Route path="/admin" component={Admin} />
        <Redirect to="/shop" />
      </Switch>
    </Router>
  </AuthProviderImpl>
);

export default App;
