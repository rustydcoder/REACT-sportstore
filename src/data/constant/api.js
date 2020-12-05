import axios from "axios";
import { RestUrls } from "./Urls";

const sendRequest = (method, url, params) => axios({ method, url, params });

const GetData = (dataType, params) =>
  sendRequest("get", RestUrls[dataType], params);

export { GetData };
