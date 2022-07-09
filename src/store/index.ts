import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newsService from "./newsService";
import { persistReducer } from "redux-persist";
import service from "./footballService";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  [service.reducerPath]: service.reducer,
  [newsService.reducerPath]: newsService.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
