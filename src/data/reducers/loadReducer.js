import { ActionTypes } from "../Types";

const loadReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...state,
        [action.payload.dataType]: action.payload.data,
      };

    default:
      return state;
  }
};

export default loadReducer;
