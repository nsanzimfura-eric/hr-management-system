// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SideNavBarLink, navbarLinks } from "./navbarData";

interface ActiveSideNavBarLink {
  activeLink: SideNavBarLink;
}

const initialState: ActiveSideNavBarLink = {
  activeLink: navbarLinks[0], // the first navbar is active
};

export const counterSlice = createSlice({
  name: "activeSideNavBar",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<SideNavBarLink>) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setActiveLink } = counterSlice.actions;

const sideNavBarReducers = counterSlice.reducer;
export default sideNavBarReducers;
