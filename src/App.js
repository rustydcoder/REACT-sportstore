import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShopConnector from "./components/ShopConnector";

const App = (props) => (
  <Router>
    <Switch>
      <Route path="/shop" component={ShopConnector} />
      <Redirect to="/shop" />
    </Switch>
  </Router>
);

export default App;
