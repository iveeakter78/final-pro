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
      console.log(action.payload,"action");
      state.cartItems.push(action.payload);
    },
  },
})

export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer