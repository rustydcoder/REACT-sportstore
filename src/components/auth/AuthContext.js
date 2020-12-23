import { createContext } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  webToken: null,
  authenticate: (username, password) => {},
  signout: () => {},
});
