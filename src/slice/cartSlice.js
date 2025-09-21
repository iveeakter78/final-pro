import { cartSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
   cartItems: 0,
  },
  reducers: {
    increment: (state) => {
      console.log(state,"state");
      
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer