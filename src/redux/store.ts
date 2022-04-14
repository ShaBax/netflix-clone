import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import myListReducer from "./reducers/my-list-reducer";

export const store = configureStore({
  //TODO: Add new reducers to combine them all
  reducer: myListReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
