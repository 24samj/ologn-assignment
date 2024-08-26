import { configureStore } from "@reduxjs/toolkit";
import localityReducer from "./localitySlice";

export const store = configureStore({
  reducer: {
    locality: localityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
