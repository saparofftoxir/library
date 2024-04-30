import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import basketReducer from "../features/basketSlice";
import choosensSlice from "../features/choosenSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    basket: basketReducer,
    choosenss: choosensSlice,
  },
});
