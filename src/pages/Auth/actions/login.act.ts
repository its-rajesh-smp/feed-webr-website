import { AppDispatch } from "@/common/hooks/useAppDispatch";
import { setAuthUser } from "@/store/slices/authUserSlice";
import { RootState } from "@/store/store";

export const loginAct = (userCredentials: any) => {
  return async (dispatch: AppDispatch, _: () => RootState) => {
    // TODO: Call API to login the user with user credentials

    dispatch(
      setAuthUser({
        email: userCredentials.email,
        isAuthenticated: true,
      })
    );
  };
};
