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

      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))
    },
    cartQuantity: (state, action) => {
      console.log(state);
      console.log(action.payload);
      

      if(action.payload.type == "increment"){
        state.cartItems[action.payload.id].cartQun += 1
      }else{
         state.cartItems[action.payload.id].cartQun -= 1
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))
    }
  },
})

export const { cartTotal ,cartQuantity } = cartSlice.actions

export default cartSlice.reducer