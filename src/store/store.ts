import authReducers from "@/pages/auth/reducers/authReducers";
import authUserReducer from "./slices/authUserSlice";

import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    authUserReducer,
    ...authReducers,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
