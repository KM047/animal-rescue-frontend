import axios from "axios";
import config from "../config/config";

const axiosInstance = axios.create({
    baseURL: `${config.severURL}`, // Replace this with your actual API base URL
    headers: {
        "Content-Type": "application/json",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        // You can add other common headers here if needed
    },
});

export default axiosInstance;
