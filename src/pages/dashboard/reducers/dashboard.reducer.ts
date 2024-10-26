import { IWorkspace } from "@/pages/overview/types/overview.type";
import { createSlice } from "@reduxjs/toolkit";

const defaultState: { currentWorkspace: IWorkspace | null } = {
  currentWorkspace: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { ...defaultState },
  reducers: {
    setCurrentWorkspace(state, action) {
      state.currentWorkspace = action.payload;
    },
  },
});

export default dashboardSlice.reducer;
export const { setCurrentWorkspace } = dashboardSlice.actions;
