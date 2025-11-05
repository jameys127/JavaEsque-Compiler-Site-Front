import axios from "axios";

const api = axios.create({
    baseURL: 'https://cyzpbwctj9.execute-api.us-west-1.amazonaws.com/firstDep'
});

export default api;