import listingsSlice from "./reducers/listingsSlice";
import { configureStore } from "@reduxjs/toolkit";
import categoryFilterSlice from "./reducers/categoryFilterSlice";

export const store = configureStore({
  reducer: {
    categoriesToFilter: categoryFilterSlice,
    listings: listingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
