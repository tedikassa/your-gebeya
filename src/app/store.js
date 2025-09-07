import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// git remote add origin https://github.com/tedikassa/your-gebey.git
// git branch -M main
// git push -u origin main
