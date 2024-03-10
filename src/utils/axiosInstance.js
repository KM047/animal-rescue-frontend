import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://example.com/api", // Replace this with your actual API base URL
    headers: {
        "Content-Type": "application/json",
        // You can add other common headers here if needed
    },
});

export default axiosInstance;
