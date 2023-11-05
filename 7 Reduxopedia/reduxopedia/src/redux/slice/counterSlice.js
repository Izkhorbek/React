import { createSlice } from "@reduxjs/toolkit";

const initialState = { countSlice: 20 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // here we will define all actions
    increment: (state) => {
      state.countSlice += 1;
    },
    decrement: (state) => {
      state.countSlice -= 1;
    },
    incrementMult: (state, action) => {
      state.countSlice += action.payload;
    },
    decrementMult: (state, action) => {
      state.countSlice -= action.payload;
    },
    resetCount: (state) => {
      state.countSlice = 20;
    },
  },
});

export const {
  increment,
  decrement,
  incrementMult,
  decrementMult,
  resetCount,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
