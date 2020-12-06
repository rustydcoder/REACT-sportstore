import axios from "axios";
import { RestUrls } from "./Urls";

const sendRequest = (method, url, params, data) =>
  axios({ method, url, params, data });

const GetData = (dataType, params) =>
  sendRequest("get", RestUrls[dataType], params);

const StoreData = (dataType, data) =>
  sendRequest("post", RestUrls[dataType], {}, data);

export { GetData, StoreData };
