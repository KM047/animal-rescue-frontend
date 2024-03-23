import { configureStore } from "@reduxjs/toolkit";

import authSliceProvider from "./authSlice";
import animalSliceProvider from "./animalSlice";

const store = configureStore({
    reducer: {
        auth: authSliceProvider,
        animals: animalSliceProvider,
    },
});
export default store;
