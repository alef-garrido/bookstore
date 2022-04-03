/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAction } from '@reduxjs/toolkit';

// Action
export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

// Entity Slice
const slice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    bookAdded: (books, action) => {
      books.list.push(action.payload.body);
    },
    booksRequested: (books, action) => {
      books.loading = true;
    },
    booksRequestFailed: (books, action) => {
      books.loading = false;
    },
    booksReceived: (books, action) => {
      books.list = action.payload;
      books.loading = false;
    },
  },
});

export const {
  bookAdded, bookRemoved, booksReceived, booksRequested, booksRequestFailed,
} = slice.actions;

// action creators
const url = '/books';
export const loadBooks = () => apiCallBegan({
  url,
  method: 'GET',
  onStart: booksRequested.type,
  onSuccess: booksReceived.type,
  onError: booksRequestFailed.type,
});

export const addBook = (book) => apiCallBegan({
  url,
  method: 'POST',
  body: JSON.stringify(book),
  onSuccess: bookAdded.type,
});

export const removeBook = (id) => apiCallBegan({
  url: `${url}/${id}`,
  method: 'DELETE',
  body: JSON.stringify({ item_id: id }),
  onStart: booksRequested.type,
  onSuccess: booksReceived.type,
  onError: booksRequestFailed.type,
});

export default slice.reducer;
