import { ActionTypes } from "../constant/Types";
// import { data as placeHolderData } from "../placeholder";
import * as api from "../constant/api";

export const loadData = (dataType) => async (dispatch) => {
  const action = {
    type: ActionTypes.DATA_LOAD,
    payload: { dataType, data: [] },
  };

  try {
    const { data } = await api.GetData(dataType);

    dispatch({ ...action, payload: { ...action.payload, data } });
  } catch (error) {
    console.log(error.message);
  }
};
