import axios from "axios";

axios.defaults.baseURL = 'https://myfxlifeapi-66a11d885add.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;


export const axiosReq = axios.create();
export const axiosRes = axios.create();