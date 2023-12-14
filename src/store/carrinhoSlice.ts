import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CarrinhoState {
  items: string[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload)
    },
    removerItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item !== action.payload)
    }
  }
})

export const { adicionarItem, removerItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer
