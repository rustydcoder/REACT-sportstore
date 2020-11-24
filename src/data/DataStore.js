import { createStore } from "redux";
import reducer from "./reducers";

export const SportsStoreDataStore = createStore(reducer);
