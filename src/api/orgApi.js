import axiosInstance from "./../utils/axiosInstance";
import Cookies from "js-cookie";

export const orgSignup = async (orgData) => {
    try {
        const response = await axiosInstance.post("/users/register", orgData, {
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
export const addRescuer = async (rescuerData) => {
    try {
        const response = await axiosInstance.post(
            "/orgs/add-rescuer",
            rescuerData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};

export const orgLogin = async (orgData) => {
    try {
        const response = await axiosInstance.post("/rescuers/login", orgData, {
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

export const logoutOrg = async () => {
    try {
        const response = await axiosInstance.post(
            "/orgs/logout",
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                withCredentials: true,
            }
        );
        // const data = await response.json();
        // console.log("response from logout:", response);
        return response.message;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const updateOrgPassword = async (orgData) => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.patch(
            "/orgs/change-password",
            orgData,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                // withCredentials: true,
            }
        );

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};

export const updateOrgAvatar = async (orgData) => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.patch(
            "/orgs/change-logo",
            orgData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};

export const removeTheRescuer = async (rescuerId) => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.delete(
            `/orgs/remove-rescuer/${rescuerId}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};

export const getAllRescuers = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.get("/orgs/rescuers", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};
export const getAllRescuedAnimal = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.get("/orgs/rescued-animals", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup user:", error);
        throw error;
    }
};
