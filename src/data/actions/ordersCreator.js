import { ActionTypes, DataTypes } from "../constant/Types";
import * as api from "../constant/api";

const placeOrder = (order) => async (dispatch) => {
  const action = {
    type: ActionTypes.DATA_STORE,
    payload: {
      dataType: DataTypes.ORDERS,
      data: {},
    },
  };

  try {
    const { data } = await api.StoreData(DataTypes.ORDERS, order);
    dispatch({
      ...action,
      payload: { ...action.payload, data },
    });
  } catch (error) {
    console.log(error);
  }
};

export { placeOrder };
