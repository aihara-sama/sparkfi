import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Store as ReduxStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appSlice } from "slices/app.slice";

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage,
    },
    combineReducers({
      app: appSlice.reducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register"],
        ignoredPaths: ["register"],
      },
    }),
});

export type ApplicationState = {};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = ReduxStore<ApplicationState>;

export const persistor = persistStore(store);
