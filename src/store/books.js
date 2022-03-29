import { v4 as uuidv4 } from 'uuid/dist/v4';

// Action types
export const BOOK_ADDED = 'bookAdded';
export const BOOK_REMOVED = 'bookRemoved';

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
export default function booksReducer(action, state = []) {
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
