import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
  increaseItemCount(state, action) {
    const itemId = action.payload;
    const itemToUpdate = state.basket.find((item) => item.id === itemId);
    if (itemToUpdate) {
      itemToUpdate.count += 1;
    }
  },
  updateItemPrice(state, action) {
    const { itemId, priceIncrease } = action.payload;
    const itemToUpdate = state.basket.find((item) => item.id === itemId);
    if (itemToUpdate) {
      itemToUpdate.price += priceIncrease;
    }
  },
  deleteItem(state, action) {
    const itemId = action.payload;
    const filteredBasket = state.basket.filter((item) => item.id !== itemId);
    state.basket = filteredBasket;
  },
});
export const { AddToBasket, increaseItemCount, updateItemPrice,deleteItem } =
  basketSlice.actions;
export default basketSlice.reducer;
