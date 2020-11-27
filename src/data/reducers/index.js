import { combineReducers } from "redux";
import loadReducer from "./loadReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  shopReducer: loadReducer,
  cartReducer,
});
