import { AuthUser } from "@/common/types/authUser.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthUser = {
  isAuthenticated: false,
  email: "",
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setAuthUser: (_, action: PayloadAction<AuthUser>) => {
      return action.payload;
    },

    logout: (state) => {
      state.email = "";
      state.isAuthenticated = false;
      localStorage.removeItem("idToken");
    },
  },
});

export default authUserSlice.reducer;
export const { setAuthUser, logout } = authUserSlice.actions;
