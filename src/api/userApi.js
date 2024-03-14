import axiosInstance from "./../utils/axiosInstance";
export const getUser = async () => {
    try {
        const response = await axiosInstance.get("/api/users/current-user");

        const data = await response.json();
        console.log("data received", data);
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

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
