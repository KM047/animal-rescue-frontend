import { configureStore } from "@reduxjs/toolkit";

import authSliceProvider from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSliceProvider,
    },
});
export default store;
