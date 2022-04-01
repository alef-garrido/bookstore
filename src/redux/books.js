import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Action Creators




// Entity Slice

const slice = createSlice({
  name: 'books',
  initialState: {
    list: [],
    isFetching: false,
    errorMessage: undefined,
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
