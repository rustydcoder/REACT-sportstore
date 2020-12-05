import { ActionTypes } from "../constant/Types";

const loadReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
      };

    case ActionTypes.DATA_SET_PAGESIZE:
      return { ...state, pageSize: action.payload };

    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return { ...state, sortKey: action.payload };

    default:
      return state;
  }
};

export default loadReducer;
