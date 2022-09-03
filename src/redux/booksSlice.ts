import { Book } from "./../interfaces/Book";
import { fetchSortedBooks, removeBook, setNewBook, updateBook } from "./thunk";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.id,
});

export const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(initialState),

  reducers: {
    changeSortingType(state, action) {
      state.sortingType = action.payload;
    },

    setRecommendedBook(state, action) {
      state.recommendedBook = action.payload;
    },

    toggleDirectionSort(state, action) {
      state.directionSort = action.payload === "author" ? "asc" : "desc";
    },

    toggleSpinner(state, action) {
      state.loaderOn = action.payload;
    },
    changeSuccessAlert(state) {
      state.successAlert = !state.successAlert;
    },
    changeErrorAlert(state) {
      state.errorAlert = !state.errorAlert;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSortedBooks.fulfilled, (state, action) => {
        booksAdapter.setAll(state, action.payload);
        state.books = action.payload;
        state.loaderOn = !state.loaderOn;
      })

      .addCase(setNewBook.fulfilled, (state, action) => {
        booksAdapter.addOne(state, action.payload);
        state.loaderOn = !state.loaderOn;
        state.successAlert = !state.successAlert;
      })

      .addCase(removeBook.fulfilled, (state, action) => {
        booksAdapter.removeOne(state, action.payload);
        state.loaderOn = !state.loaderOn;
        state.successAlert = !state.successAlert;
      })

      .addCase(updateBook.fulfilled, (state, action) => {
        booksAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload.book,
        });
        state.loaderOn = !state.loaderOn;
        state.successAlert = !state.successAlert;
      })

      
      .addCase(fetchSortedBooks.pending, (state) => {
        state.loaderOn = !state.loaderOn;
      })

      .addCase(setNewBook.pending, (state) => {
        state.loaderOn = !state.loaderOn;
      })

      .addCase(removeBook.pending, (state) => {
        state.loaderOn = !state.loaderOn;
      })

      .addCase(updateBook.pending, (state) => {
        state.loaderOn = !state.loaderOn;
      })

      
      .addCase(setNewBook.rejected, (state) => {
        state.errorAlert = !state.errorAlert;
        state.loaderOn = !state.loaderOn;
      })

      .addCase(removeBook.rejected, (state) => {
        state.errorAlert = !state.errorAlert;
        state.loaderOn = !state.loaderOn;
      })

      .addCase(updateBook.rejected, (state) => {
        state.errorAlert = !state.errorAlert;
        state.loaderOn = !state.loaderOn;
      });
  },
});

export const {
  changeSortingType,
  toggleDirectionSort,
  setRecommendedBook,
  toggleSpinner,
  changeSuccessAlert,
  changeErrorAlert,
} = booksSlice.actions;
