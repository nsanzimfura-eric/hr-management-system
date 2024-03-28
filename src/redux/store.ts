// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import sideNavBarReducers from "../components/sideNavbar/sideNavBarSlices";

export const store = configureStore({
  reducer: {
    sideNavBarReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
