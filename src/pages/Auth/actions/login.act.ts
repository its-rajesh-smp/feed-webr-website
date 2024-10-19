import { AppDispatch } from "@/common/hooks/useAppDispatch";
import client from "@/setup/apolloClient.setup";
import { setAuthUser } from "@/store/slices/authUserSlice";
import { RootState } from "@/store/store";
import { LOGIN_USER } from "../services/auth.gql";

export const loginAct = (userCredentials: any) => {
  return async (dispatch: AppDispatch, _: () => RootState) => {
    const response = await client.mutate({
      mutation: LOGIN_USER,
      variables: { userInput: userCredentials },
    });
    localStorage.setItem("idToken", response?.data?.user?.idToken);

    dispatch(
      setAuthUser({
        email: userCredentials.email,
        isAuthenticated: true,
      })
    );
  };
};
