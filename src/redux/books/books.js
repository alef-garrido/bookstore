import { v4 as uuidv4 } from 'uuid';

// Action types
const BOOK_ADDED = 'bookstore/books/bookAdded';
const BOOK_REMOVED = 'bookstore/books/bookRemoved';

// ACTION CREATORS
export const addBook = (payload) => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBook = (payload) => ({
  type: BOOK_REMOVED,
  payload,
});

// REDUCER
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
}