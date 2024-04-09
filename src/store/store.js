import { configureStore } from "@reduxjs/toolkit";

import authSliceProvider from "./authSlice";
import animalSliceProvider from "./animalSlice";
import orgAuthSliceProvider from "./orgAuthSlice";
import rescuerAuthSliceProvider from "./rescuerAuthSlice";
import allRescuersSliceProvider from "./allRescuersSlice";
import allRescuedAnimalsSliceProvider from "./allRescuedAnimalsSlice";

const store = configureStore({
    reducer: {
        auth: authSliceProvider,
        animals: animalSliceProvider,
        orgAuth: orgAuthSliceProvider,
        rescuerAuth: rescuerAuthSliceProvider,
        allRescuers: allRescuersSliceProvider,
        allRescuedAnimals: allRescuedAnimalsSliceProvider,
    },
});
export default store;
