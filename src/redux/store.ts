// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import sideNavBarReducers from "../components/sideNavbar/sideNavBarSlices";
import candidatesReducers from "./../pages/dashboard/components/Candidates/candidatesSlice";

export const store = configureStore({
  reducer: {
    sideNavBarReducers,
    candidatesReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
