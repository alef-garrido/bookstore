import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    getStatus: () => 'Under Construction :)',
  },
});

export const { getStatus } = slice.actions;

export default slice.reducer;
