import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { booksSlice } from "./booksSlice";

export const store = configureStore({
  reducer: {
    booksReducer: booksSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
