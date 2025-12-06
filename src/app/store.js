// ...existing code...
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // use the middleware callback parameter instead of importing getDefaultMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // optional: disable serializable check if you're using non-serializable values (e.g. firebase)
      serializableCheck: false,
    }),
});

export default store;
// ...existing code...