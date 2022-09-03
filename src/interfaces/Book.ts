import { OrderByDirection } from "firebase/firestore";

export interface Book {
  author: string;
  name: string;
  year: number;
  rating: number;
  isbn: string;
  imageLink: string;
  id?: string;
}

export interface BookState {
  books: Book[];
  sortingType: SortingType;
  recommendedBook: Book | number;
  directionSort: OrderByDirection;
  loaderOn: boolean;
  errorAlert: boolean;
  successAlert: boolean;
}

export type SortingType = "year" | "rating" | "author";
