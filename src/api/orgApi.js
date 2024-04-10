import axiosInstance from "./../utils/axiosInstance";
import Cookies from "js-cookie";

export const orgSignup = async (orgData) => {
    try {
        const response = await axiosInstance.post("/orgs/register", orgData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error signup org:", error);
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
                withCredentials: true,
            }
        );

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error while adding rescuer:", error);
        throw error;
    }
};

export const orgLogin = async (orgData) => {
    try {
        const response = await axiosInstance.post("/orgs/loginOrg", orgData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error("Error updating org:", error);
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
        console.error("Error updating org:", error);
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
        console.error("Error while updating password:", error);
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

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error while updating the logo:", error);
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

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error while removing rescuer:", error);
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
        console.error("Error while fetching all rescuers:", error);
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
        console.error(
            "Error while fetching all rescued animals by org:",
            error
        );
        throw error;
    }
};

export const getCurrentOrg = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");

        // console.log("Access token retrieved", accessToken);

        const response = await axiosInstance.get("/orgs/current-org", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        // const data = await response.json();

        if (accessToken) {
            Cookies.set("accessToken", accessToken);
        }

        return response.data;
    } catch (error) {
        console.error("Error while getting the org data:", error);
        throw error;
    }
};
