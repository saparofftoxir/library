import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  choosenss: JSON.parse(localStorage.getItem("choosenss")) || [],
};
const choosenSlice = createSlice({
  name: "choosenss",
  initialState,
  reducers: {
    AddToChoosens: (state, action) => {
      state.choosenss = [...state.choosenss, action.payload];
    },
  },
});
export const { AddToChoosens } = choosenSlice.actions;
export default choosenSlice.reducer;
