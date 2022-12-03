import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"
import userReducer from "../features/users/usersSlice"
const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer
  },
  middleware:(getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false
  }))
});

export default store;
