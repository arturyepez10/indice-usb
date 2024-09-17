import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings";
import academicsReducer from "./academics";

import { cookiesSettingsListener } from "./middleware";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    academics: academicsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cookiesSettingsListener.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
