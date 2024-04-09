import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allRescuersData: [],
};

const allRescuerSlice = createSlice({
    name: "allRescuers",
    initialState,
    reducers: {
        setAllRescuers: (state, action) => {
            state.allRescuersData = action.payload;
        },

        addRescuer: (state, action) => {
            state.allRescuersData.push(action.payload);
        },

        removeRescuer: (state, action) => {
            state.allRescuersData = state.allRescuersData.filter(
                (rescuer) => rescuer._id !== action.payload
            );
        },
    },
});

export const { setAllRescuers, addRescuer, removeRescuer } =
    allRescuerSlice.actions;
export default allRescuerSlice.reducer;
