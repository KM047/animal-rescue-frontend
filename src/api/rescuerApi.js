import axiosInstance from "./../utils/axiosInstance";
import Cookies from "js-cookie";
export const rescuerLogin = async (rescuerData) => {
    try {
        const response = await axiosInstance.post(
            "/rescuers/login",
            rescuerData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                withCredentials: true,
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error while updating rescuers:", error);
        throw error;
    }
};

export const logoutRescuer = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");

        const response = await axiosInstance.post(
            "/rescuers/logout",
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        // const data = await response.json();
        // console.log("response from logout:", response);
        return response.message;
    } catch (error) {
        console.error("Error while logout rescuer:", error);
        throw error;
    }
};

export const addAnimalRescued = async (animalId) => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.post(
            `/rescuers/rescued-animal/${animalId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error("Error while adding animal by rescuer:", error);
        throw error;
    }
};

export const updateResPassword = async (rescuerData) => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.patch(
            "/rescuers/change-password",
            rescuerData,
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
        console.error("Error while updating the rescuers password:", error);
        throw error;
    }
};

export const getCurrentRescuer = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");

        // console.log("Access token retrieved", accessToken);

        const response = await axiosInstance.get("/rescuers/current-rescuer", {
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
        console.error("Error while getting the rescuers data:", error);
        throw error;
    }
};

export const getAllRescuedAnimal = async () => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.get("/rescuers/get-all-animal", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // console.log("response: ", response);

        return response.data;
    } catch (error) {
        console.error(
            "Error while fetching all rescued animals by rescuers:",
            error
        );
        throw error;
    }
};

export const updateResAvatar = async (resData) => {
    try {
        const accessToken =
            Cookies.get("accessToken") || localStorage.getItem("accessToken");
        const response = await axiosInstance.patch(
            "/rescuers/change-avatar",
            resData,
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
        console.error("Error while updating the logo:", error);
        throw error;
    }
};
