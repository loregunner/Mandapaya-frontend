import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { loginSlice } from "./slices/login";
import logger from "redux-logger";
import storage from "./customStorage";


const loginPersistConfig = {
  key: "login",
  storage: storage,
  whitelist: [
    "data",
    "token",
  ],
};


const rootReducer = combineReducers({
  login: persistReducer(loginPersistConfig, loginSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getDefaultMiddleware({ serializableCheck: false }).concat(logger as any),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<Store["getState"]>;
export type AppDispatch = typeof store.dispatch;
