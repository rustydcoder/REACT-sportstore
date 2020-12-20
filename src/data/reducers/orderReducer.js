import { ActionTypes, DataTypes } from "../constant/Types";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DATA_STORE:
      if (action.payload.dataType === DataTypes.ORDERS) {
        return { ...state, order: action.payload.data };
      }
      break;

    default:
      return state;
  }
};

export default orderReducer;
