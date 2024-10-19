import { createSlice } from "@reduxjs/toolkit";
import { IWorkspace } from "../types/overview.type";

const initialState: {
  workspaces: IWorkspace[];
  totalWorkspaces: number;
} = {
  workspaces: [],
  totalWorkspaces: NaN,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspaces: (state, action) => {
      state.workspaces = action.payload;
      state.totalWorkspaces = action.payload.length;
      return state;
    },
    addWorkspace: (state, action) => {
      state.workspaces = [...state.workspaces, action.payload];
      state.totalWorkspaces = state.workspaces.length;
      return state;
    },

    removeWorkspace: (state, action) => {
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace.id !== action.payload
      );
      state.totalWorkspaces = state.workspaces.length;
      return state;
    },
  },
});

export const { setWorkspaces, addWorkspace, removeWorkspace } =
  workspaceSlice.actions;
export default workspaceSlice.reducer;
