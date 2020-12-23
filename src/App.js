import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ShopConnector from "./components/ShopConnector";
import AuthProviderImpl from "./components/auth/AuthProviderImpl";

const Admin = lazy(() => import("./components/admin"));

const App = (props) => (
  <AuthProviderImpl>
    <Router>
      <Switch>
        <Route path="/shop" component={ShopConnector} />
        <Route
          path="/admin"
          render={(routeProps) => (
            <Suspense fallback={<h3>Loading...</h3>}>
              <Admin {...routeProps} />
            </Suspense>
          )}
        />
        <Redirect to="/shop" />
      </Switch>
    </Router>
  </AuthProviderImpl>
);

export default App;
