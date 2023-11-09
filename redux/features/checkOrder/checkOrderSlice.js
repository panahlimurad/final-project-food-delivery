
import { createSlice } from '@reduxjs/toolkit';

const checkOrderSlice = createSlice({
  name: 'checkOrder',
  initialState: {
    checkOrderState: false, 
  },
  reducers: {
    setCheckOrderTrue: (state) => {
      state.checkOrderState = true;
    },
    setCheckOrderFalse: (state) => {
      state.checkOrderState = false;
    },
  },
});

export const { setCheckOrderTrue } = checkOrderSlice.actions;

export default checkOrderSlice.reducer;
