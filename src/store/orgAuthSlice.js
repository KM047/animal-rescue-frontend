import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    orgData: null,
};

const orgAuthSlice = createSlice({
    name: "orgAuth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.orgData = action.payload;
        },

        logout: (state) => {
            state.status = false;
            state.orgData = null;
        },
    },
});

export const { login, logout } = orgAuthSlice.actions;

export default orgAuthSlice.reducer;
