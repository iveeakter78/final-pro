import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
  cartItems: [],
  },
  reducers: {
    cartTotal: (state, action) => {
      console.log(state.cartItems,"state");
      console.log(state.payload,"action");
      state.cartItems.push(state.payload);
    },
  },
})

export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer