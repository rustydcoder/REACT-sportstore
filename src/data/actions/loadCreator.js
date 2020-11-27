import { ActionTypes } from "../Types";
import { data as placeHolderData } from "../placeholder";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType,
    data: placeHolderData[dataType],
  },
});
