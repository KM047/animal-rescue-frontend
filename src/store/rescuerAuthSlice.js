import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    rescuerData: null,
};

const rescuerAuthSlice = createSlice({
    name: "rescuerAuth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.rescuerData = action.payload;
        },

        logout: (state) => {
            state.status = false;
            state.rescuerData = null;
        },
    },
});

export const { login, logout } = rescuerAuthSlice.actions;

export default rescuerAuthSlice.reducer;
