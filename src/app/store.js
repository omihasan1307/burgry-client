import { configureStore } from "@reduxjs/toolkit";
import alItemSlice from "./features/alItemSlice";

export const store = configureStore({
  reducer: {
    allItems: alItemSlice,
  },
});
