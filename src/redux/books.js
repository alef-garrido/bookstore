/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Action
export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

// Entity Slice
const slice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    booksReceived: (books, action) => [
      ...books,
      action.payload,
    ],
    bookAdded: (books, action) => {
      books.push({
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    bookRemoved: (books, action) => {
      books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { bookAdded, bookRemoved, booksReceived } = slice.actions;

// action creators
const url = '/books';
export const loadBooks = () => apiCallBegan({
  url,
  method: 'GET',
  onSucces: booksReceived.type,
});

export default slice.reducer;
