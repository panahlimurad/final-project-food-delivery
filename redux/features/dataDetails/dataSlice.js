// redux/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    filteredItems: [],
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    filterItems: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredItems = state.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setItems, filterItems } = dataSlice.actions;

export const selectItems = state => state.data.items;
export const selectFilteredItems = state => state.data.filteredItems;

export default dataSlice.reducer;

