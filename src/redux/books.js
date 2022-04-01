import { createSlice, createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Action Creators
export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

// Entity Slice
const slice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    isFetching: false,
    lastFetch: null,
  },

  reducers: {
    bookAdded: (books, action) => {
      books.list.push({
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    bookRemoved: (books, action) => {
      books.list.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { bookAdded, bookRemoved } = slice.actions;

export default slice.reducer;
