import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
  // cartItems: [],
   cartItems: localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem
    ("cartDetails")): []
  },
  reducers: {
    cartTotal: (state, action) => {
      const findIndex = state.cartItems.findIndex((item)=> item.id
    == action.payload.id)
   
    console.log(findIndex);
    
     if(findIndex >= 0){
        state.cartItems[findIndex].cartQun += 1
     }else{
        state.cartItems.push({...action.payload, cartQun: 1})
     }

      localStorage.setItem("cartDetails", JSON.stringify(action.payload))
    },
    
  },
})

export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer