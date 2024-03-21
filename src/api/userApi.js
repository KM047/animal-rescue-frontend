import axiosInstance from "./../utils/axiosInstance";
import Cookies from "js-cookie";

export const updateUser = async (userId, userData) => {
    try {
        const response = await axiosInstance.patch(
            `/users/${userId}`,
            userData
        );
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const userSignup = async (userData) => {
    try {
        const response = await axiosInstance.post("/users/register", userData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};
export const userLogin = async (userData) => {
    try {
        const response = await axiosInstance.post("/users/login", userData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const getServerHealth = async () => {
    try {
        const response = await axiosInstance.get("/healthcheck");
        // const data = await response.json();
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");

        console.log("Access token retrieved", accessToken);

        const response = await axiosInstance.get("/users/current-user", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
        });
        // const data = await response.json();

        if (accessToken) {
            Cookies.set("accessToken", accessToken);
        }

        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.post(
            "/users/logout",
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                withCredentials: true,
            }
        );
        // const data = await response.json();
        console.log("response from logout:", response);
        return response.message;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};
