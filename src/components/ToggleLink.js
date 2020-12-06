import React from "react";
import { Route, Link } from "react-router-dom";

export const ToggleLink = (props) => (
  <Route
    path={props.to}
    exact={props.exact}
    children={(routeProps) => {
      const baseClass = props.className || "m-2 btn btn-block";
      const activeClass = props.activeClass || "btn-primary";
      const inActiveClass = props.inActiveClass || "btn-secondary";
      const combinedClasses = `${baseClass} ${
        routeProps.match ? activeClass : inActiveClass
      }`;

      return (
        <Link to={props.to} className={combinedClasses}>
          {props.children}
        </Link>
      );
    }}
  />
);
