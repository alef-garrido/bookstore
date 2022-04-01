/* eslint-disable no-unused-vars  */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    getStatus: (state, action) => 'bookstore/categories/getStatus',
  },
});

export const { getStatus } = slice.actions;

export default slice.reducer;
