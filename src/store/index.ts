import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})
