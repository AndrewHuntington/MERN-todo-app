import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

const combinedReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
