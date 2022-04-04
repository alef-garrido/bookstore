import { createSlice, createAction } from '@reduxjs/toolkit';
import { booksEndpoint } from './data/commonEndpoints';

// Books Slice
const slice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    bookAdded: (state, action) => {
      const newItem = JSON.parse(action.payload);
      const newBook = [
        newItem.item_id,
        [
          { ...newItem },
        ],
      ];
      state.list.push(newBook);
    },
    bookRemoved: (state, action) => {
      const id = JSON.parse(action.payload).item_id;
      state.list = state.list.filter((book) => book[0] !== id);
    },
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

// Get Actions from slice
export const { bookAdded, bookRemoved ,booksReceived, booksRequestFailed, booksRequested } = slice.actions

// Action Creators 

  // to handle API-Request Stages
export const apiRequestBegan = createAction('api/RequestBegan');
export const apiRequestSucceed = createAction('api/RequestSucceed');
export const apiRequestFailed = createAction('api/RequestFailed');

  //to hablde UI events
export const loadBooks = () => apiRequestBegan({
    url: booksEndpoint,
    method: 'GET',
    onSucces: booksReceived.type,
});
  

export default slice.reducer;
