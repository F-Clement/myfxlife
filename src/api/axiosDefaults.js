import axios from "axios";

axios.defaults.baseURL = 'https://myfxlife-api-ccff7c686884.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipar/form-data';
axios.defaults.withCredentials = true;
