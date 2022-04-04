import { createSlice, createAction } from '@reduxjs/toolkit';

// Books Slice
const slice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    booksRequested: (state) => {
      state.loading = true;
    },
    booksReceived: (state) => {
      state.list = action.payload;
      books.loading = false;
    },
    booksRequestFailed: (state) => {
      state.loading = false;
    },
  },
});

export default slice.reducer;
