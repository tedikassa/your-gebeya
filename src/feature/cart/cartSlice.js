import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find((i) => i.ID === item.ID);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.ID !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
