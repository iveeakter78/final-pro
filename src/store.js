import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slice/CartSlice'

export const store = configureStore({
  reducer: {
    cartDetails: cartSlice,
  },
})