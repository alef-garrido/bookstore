import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    getStatus: () => 'bookstore/categories/getStatus',
  },
});

export const { getStatus } = slice.actions;

export default slice.reducer;
