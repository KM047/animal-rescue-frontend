import axiosInstance from "../utils/axiosInstance";

export const getAnimalData = async (animalId) => {
    try {
        const response = await axiosInstance.get(`/animals/:${animalId}`);
        return response;
    } catch (error) {
        console.error("Error getting animal data:", error);
        throw error;
    }
};

export const getAllAnimalsData = async () => {
    try {
        const response = await axiosInstance.get(`/animals/get-all-animals`);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};
