import { ActionTypes } from "../constant/Types";
import * as api from "../constant/api";

const loadData = (dataType, params = {}) => async (dispatch) => {
  const action = {
    type: ActionTypes.DATA_LOAD,
    payload: { dataType, total: 0, params, data: [] },
  };

  try {
    const { data, headers } = await api.GetData(dataType, params);
    dispatch({
      ...action,
      payload: {
        ...action.payload,
        data,
        total: Number(headers["x-total-count"]),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const setPageSize = (newSize) => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize,
});

const setSortProperty = (newProp) => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp,
});

export { loadData, setPageSize, setSortProperty };
