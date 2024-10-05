import authReducers from "@/pages/Auth/reducers/authReducers";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    ...authReducers,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
