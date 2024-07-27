import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../App";

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      console.log('favoritar', favorito)
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
