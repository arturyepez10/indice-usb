import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settings";
import academicsReducer from "./academics";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    academics: academicsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
