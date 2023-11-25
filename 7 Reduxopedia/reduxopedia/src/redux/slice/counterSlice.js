import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOpedia } from "../actions/actions";
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
<<<<<<< Updated upstream
  },
  extraReducers: {
    [resetReduxOpedia]: (state, action) => {
      state.countSlice = 10;
    },
=======
    // resetCount: (state) => {
    //   state.countSlice = 20;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase("destination/resetDestination", (state, actions) => {
      state.countSlice = 20;
      console.log("resetCount");
    });
>>>>>>> Stashed changes
  },
});

export const { increment, decrement, incrementMult, decrementMult } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
console.log(counterSlice);
