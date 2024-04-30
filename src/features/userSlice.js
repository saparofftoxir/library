import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null, 
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    Adduser: (state, action) => {
      state.allUsers = [...state.allUsers, action.payload];
    },
    CurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { Adduser, CurrentUser } = userSlice.actions;
export default userSlice.reducer;
