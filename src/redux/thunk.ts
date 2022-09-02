import { Book, SortingType } from "./../interfaces/Book";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSortDocs, deleteBook, updateDocById } from "../firebase/firebase";
import { OrderByDirection } from "firebase/firestore";
import { setDoc } from "../firebase/firebase";

export const fetchSortedBooks = createAsyncThunk(
  "Books/fetchBooks",
  async (options: {
    sortingType: SortingType;
    directionSort: OrderByDirection;
  }) => {
    const response = await getSortDocs(
      options.sortingType,
      options.directionSort
    );
    return response;
  }
);

export const setNewBook = createAsyncThunk(
  "Books/setNewBook",
  async (options: Book) => {
    const id = await setDoc(options);
    return { id, ...options };
  }
);

export const removeBook = createAsyncThunk(
  "Books/removeBook",
  async (options: string) => {
    await deleteBook(options);
    return options;
  }
);

export const updateBook = createAsyncThunk(
  "Books/updateBook",
  async (options: { book: Book; id: string }) => {
    await updateDocById(options.book, options.id);
    return options;
  }
);
