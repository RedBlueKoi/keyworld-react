import { configureStore } from "@reduxjs/toolkit"
import cartState from "./features/cartState"
import counterReducer from "./features/counter"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartSate: cartState
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
