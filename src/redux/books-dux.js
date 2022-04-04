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

// Action Creators 

  // to handle API-Request Stages
export const apiRequestBegan = createAction('api/RequestBegan');
export const apiRequestSucceed = createAction('api/RequestSucceed');
export const apiRequestFailed = createAction('api/RequestFailed');



export default slice.reducer;
