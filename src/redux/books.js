import { createSlice, createAction } from "@reduxjs/toolkit";

// Books Slice

const slice = createSlice({
  name: 'books',
  initialState:{
    list: [],
    loading:false,
  },
  reducers: {
    bookAdded: (state, action) => {
      newItem = JSON.parse(action.payload);
      newBook = [
        newItem.item_id,
        [
          { ...newItem }
        ],
      ]
      state.list.push(newBook);
    },
    Book
  }
})