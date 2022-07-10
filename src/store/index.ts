import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import modals from "./modals";
import newsService from "./newsService";
import { persistReducer } from "redux-persist";
import service from "./footballService";
import settings from "./settings";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  [service.reducerPath]: service.reducer,
  [newsService.reducerPath]: newsService.reducer,
  [modals.name]: modals.reducer,
  [settings.name]: settings.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: [newsService.reducerPath, modals.name],
  },
  reducers
);

const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
