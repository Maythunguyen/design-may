import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      count: 0,
    },
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
    },
  });
  
  export const { increment } = cartSlice.actions;
  export const selectCartCount = (state) => state.cart.count;
  export default cartSlice.reducer;