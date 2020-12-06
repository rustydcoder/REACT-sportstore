import { combineReducers } from "redux";
import loadReducer from "./loadReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  shopReducer: loadReducer,
  cartReducer,
  orders: orderReducer,
});
