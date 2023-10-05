import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { globalReducer } from "./global/globalSlice";
import { authReducer } from "./auth/authSlice";
import { noticesReducer } from "./notices/noticesSlice";

const persistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token", "refreshToken"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: persistedReducer,
    notices: noticesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
