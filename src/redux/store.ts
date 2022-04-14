import { persistStore, persistReducer } from "redux-persist";
import { ThunkAction, Action, createStore } from "@reduxjs/toolkit";
import myListReducer from "./reducers/my-list-reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "netflix-clone",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, myListReducer);
const store = createStore(pReducer);

const persistor = persistStore(store);
export { persistor, store };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
