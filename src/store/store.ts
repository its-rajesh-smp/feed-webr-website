import authReducers from "@/pages/auth/reducers/authReducers";
import workspaceReducer from "@/pages/overview/reducers/workspaceReducer";
import authUserReducer from "./slices/authUserSlice";
import dashboardReducer from "@/pages/dashboard/reducers/dashboard.reducer";
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
  reducer: {
    authUserReducer,
    ...authReducers,
    workspaceReducer,
    dashboardReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default reduxStore;
