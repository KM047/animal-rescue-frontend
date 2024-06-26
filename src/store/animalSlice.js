import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animalsData: [],
};

const animalSlice = createSlice({
    name: "animals",
    initialState,
    reducers: {
        setAnimal: (state, action) => {
            state.animalsData = action.payload;
        },

        addAnimal: (state, action) => {
            state.animalsData.push(action.payload);
        },

        deleteAnimal: (state, action) => {
            state.animalsData = state.animalsData.filter(
                (animal) => animal._id === action.payload.animal
            );
        },

        removeAllAnimals: (state) => {
            state.animalsData = [];
        },
    },
});

export const { setAnimal, addAnimal, deleteAnimal, removeAllAnimals } = animalSlice.actions;
export default animalSlice.reducer;
