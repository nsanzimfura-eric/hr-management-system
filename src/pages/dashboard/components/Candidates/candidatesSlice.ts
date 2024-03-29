// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveSideNavBarLink {
  clickedCandidate: any;
}

const initialState: ActiveSideNavBarLink = {
  clickedCandidate: null,
};

export const counterSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    setClickedCandidate: (state, action: PayloadAction<any>) => {
      state.clickedCandidate = action.payload;
    },
  },
});

export const { setClickedCandidate } = counterSlice.actions;

const candidatesReducers = counterSlice.reducer;
export default candidatesReducers;
