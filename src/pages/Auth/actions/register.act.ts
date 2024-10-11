import { AppDispatch } from "@/common/hooks/useAppDispatch";
import client from "@/setup/apolloClient.setup";
import { setAuthUser } from "@/store/slices/authUserSlice";
import { RootState } from "@/store/store";
import { REGISTER_USER } from "../services/auth.gql";

export const registerAct = (userCredentials: any) => {
  return async (dispatch: AppDispatch, _: () => RootState) => {
    const data = await client.mutate({
      mutation: REGISTER_USER,
      variables: { userInput: userCredentials },
    });

    localStorage.setItem("idToken", data?.data?.user?.idToken);

    dispatch(
      setAuthUser({
        email: userCredentials.email,
        isAuthenticated: true,
      })
    );
  };
};
