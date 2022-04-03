/* eslint-disable no-param-reassign */
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
    booksRequested: (books) => {
      books.loading = true;
    },
    booksRequestFailed: (books) => {
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
  onStart: booksRequested.type,
  onSuccess: bookAdded.type,
  onError: booksRequestFailed.type,
});

export const removeBook = (id) => apiCallBegan({
  url: `${url}/${id}`,
  method: 'DELETE',
  body: JSON.stringify({ item_id: id }),
  onStart: booksRequested.type,
  onSuccess: bookRemoved.type,
  onError: booksRequestFailed.type,
});

export default slice.reducer;
