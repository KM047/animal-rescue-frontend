import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allRescuedAnimalsData: [],
};

const allRescuedAnimalsSlice = createSlice({
    name: "allRescuedAnimals",
    initialState,
    reducers: {
        setAllRescuedAnimals: (state, action) => {
            state.allRescuedAnimalsData = action.payload;
        },

        addRescuedAnimal: (state, action) => {
            state.allRescuedAnimalsData.push(action.payload);
        },
    },
});

export const { setAllRescuedAnimals, addRescuedAnimal } =
    allRescuedAnimalsSlice.actions;
export default allRescuedAnimalsSlice.reducer;
