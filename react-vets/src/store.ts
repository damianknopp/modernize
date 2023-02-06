import { configureStore } from '@reduxjs/toolkit';
import VetReducer from './slice/vetsSlice';

export const store = configureStore({
  reducer: {
    vets: VetReducer
  }
});

// https://redux-toolkit.js.org/tutorials/quick-start
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
