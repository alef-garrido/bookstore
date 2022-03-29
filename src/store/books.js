// Action types
export const BOOK_ADDED = 'bookAdded';
export const BOOK_REMOVED = 'bookRemoved';


// ACTION CREATORS
export const addBook = payload => ({
  type: BOOK_ADDED,
  payload,
});

export const removeBook = payload => ({
  type: BOOK_REMOVED,
  payload,
});

// REDUCER
const lastID = 0;

export default function booksReducer(state = [], action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          id: lastID + 1,
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
