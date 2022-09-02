import { BookState } from "../interfaces/Book";

export const initialState: BookState = {
  books: [],
  sortingType: "year",
  recommendedBook: 123,
  directionSort: "desc",
  loaderOn: false,
};
