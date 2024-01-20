//neden bu dosyayi olusturuyoruz
//Adminlistte bir butona basicam baska componentteki  etkileyecek degisecek
//Merkezi state te bununla ilgili alan olustuyorum new butonuna bakinca guncellesin
// Merkezi state :
// Cesitli anlamina geliyor -> Kategorize etmediginiz seyleri toplamak

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOperation: null,
  listRefreshToken: null,
  currentRecord: null,
};

const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setOperation: (state, action) => {
      state.currentOperation = action.payload;
    },
    refreshToken: (state) => {
      state.listRefreshToken = Math.random();
    },

    setRecord: (state, action) => {
      state.currentRecord = action.payload;
    },
  },
});

export const { setOperation, refreshToken, setRecord } = miscSlice.actions;
export default miscSlice.reducer;
