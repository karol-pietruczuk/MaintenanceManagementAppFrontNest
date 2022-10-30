import { configureStore } from '@reduxjs/toolkit';
import { authSlice }  from "./features/auth/authSlice";
import { loadingSlice } from "./features/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

