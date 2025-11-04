import axios from "axios";

const api = axios.create({
    baseURL: 'https://sojzb7dypi.execute-api.us-west-1.amazonaws.com/default/javaesque-compiler'
});

export default api;