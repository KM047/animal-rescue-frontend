import axiosInstance from "../utils/axiosInstance";

export const getAnimalData = async (animalId) => {
    try {
        const response = await axiosInstance.get(
            `/animals/animal-info/${animalId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error getting animal data:", error);
        throw error;
    }
};

export const getAllAnimalsData = async (page = 1) => {
    try {
        // console.log(page);
        const response = await axiosInstance.get(
            `/animals/get-all-animals?page=${page}`
        );
        return response.data;
    } catch (error) {
        console.error("Error getting the animals data:", error);
        throw error;
    }
};
