import axiosInstance from "./../utils/axiosInstance";
export const getUser = async (userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}`);
        return response.data;
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
