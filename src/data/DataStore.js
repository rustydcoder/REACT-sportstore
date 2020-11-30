import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const SportsStoreDataStore = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
