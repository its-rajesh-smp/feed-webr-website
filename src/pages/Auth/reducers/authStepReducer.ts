import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSteps } from "../constants/authStep.const";
import { AuthStep } from "../types/authStep.type";

export const initialState: AuthStep = AuthSteps.Login;

const authStepReducer = createSlice({
  name: "authStep",
  initialState,
  reducers: {
    setAuthStep: (_, action: PayloadAction<AuthStep>) => {
      return action.payload;
    },
  },
});

export default authStepReducer.reducer;
export const { setAuthStep } = authStepReducer.actions;
