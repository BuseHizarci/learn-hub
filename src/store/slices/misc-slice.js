//neden bu dosyayi olusturuyoruz
//Adminlistte bir butona basicam baska componentteki  etkileyecek degisecek
//Merkezi state te bununla ilgili alan olustuyorum new butonuna bakinca guncellesin
// Merkezi state :
// Cesitli anlamina geliyor -> Kategorize etmediginiz seyleri toplamak

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOperation: null,
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setOperation: (state, action) => {
      state.currentOperation = action.payload;
    },
  },
});
export const { setOperation } = miscSlice.actions;
export default miscSlice.reducer;
