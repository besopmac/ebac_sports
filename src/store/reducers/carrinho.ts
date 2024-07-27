import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../App";

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      console.log('adicionarAoCarrinho', produto)

      // if (state.itens.find((game) => game.id === jogo.id)) {
      //   alert('Item já adicionado')
      // } else {
      //   state.itens = [...state.itens, jogo]
      // }
    }
  }
})

export default carrinhoSlice.reducer
