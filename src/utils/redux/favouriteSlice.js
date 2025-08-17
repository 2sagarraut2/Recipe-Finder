import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourites: (state) => {
      state.items.pop();
    },
    clearFavourites: (state) => {
      state.items.length = 0;
    },
  },
});

console.log(favouriteSlice);

export const { addToFavourites, removeFromFavourites, clearFavourites } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
