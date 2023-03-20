import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecomm-xpress.onrender.com/",
});

export default instance;