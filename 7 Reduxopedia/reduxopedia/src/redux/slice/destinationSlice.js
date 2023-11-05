import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      { name: "Hong Kong", days: 7, fact: "World's longest covered escalator" },
      { name: "Japan", days: 10, fact: "Japan is moslty mountains" },
      {
        name: "Uzbekistan",
        days: 15,
        fact: "Uzbekistan is very friednly country",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState,
  reducers: {
    destinationClicked: (state, actions) => {
      state.destinationSelected = actions.payload;
    },
    resetDestination: (state) => {
      state.destinationSelected = undefined;
    },
  },
});

export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;
