import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newsService from "./newsService";
import { persistReducer } from "redux-persist";
import service from "./footballService";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  [service.reducerPath]: service.reducer,
  [newsService.reducerPath]: newsService.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    blacklist: [newsService.reducerPath],
  },
  reducers
);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
