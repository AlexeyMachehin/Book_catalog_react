import { booksAdapter } from './booksSlice';
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from './store';

const select = (state: RootState) => state

export const selectorBooksAdapter = booksAdapter.getSelectors();

export const selectorAllSortedBooks = createSelector((state:RootState)=> state.booksReducer, selectorBooksAdapter.selectAll)

export const selectorSortingType = createSelector([select], (store) => store.booksReducer.sortingType)

export const selectorRecommendedBook = createSelector([select], (store) => store.booksReducer.recommendedBook)

export const selectorDirectionSort = createSelector([select], (store) => store.booksReducer.directionSort)

export const selectorSpinner= createSelector([select], (store) => store.booksReducer.loaderOn)

export const selectorErrorAlert= createSelector([select], (store) => store.booksReducer.errorAlert)

export const selectorSuccessAlert= createSelector([select], (store) => store.booksReducer.successAlert)







