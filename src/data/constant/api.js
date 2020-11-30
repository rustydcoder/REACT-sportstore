import Axios from "axios";
import { RestUrls } from "./Urls";

const sendRequest = (method, url) => Axios.request({ method, url });

const GetData = (dataType) => sendRequest("get", RestUrls[dataType]);

export { GetData };
