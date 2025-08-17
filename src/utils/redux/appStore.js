import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";

const appStore = configureStore({
  reducer: {
    favourite: favouriteReducer,
  },
});

// appStore.subscribe(() => {
//   console.log("Updated state:", appStore.getState());
// });

export default appStore;
