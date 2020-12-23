import React, { Component } from "react";
import { AuthContext } from "./AuthContext";

const AuthWrapper = (WrappedComponent) =>
  class extends Component {
    render = () => (
      <AuthContext.Consumer>
        {(context) => <WrappedComponent {...this.props} {...context} />}
      </AuthContext.Consumer>
    );
  };

export default AuthWrapper;
