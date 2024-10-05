import authReducers from "@/pages/auth/reducers/authReducers";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    ...authReducers,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
