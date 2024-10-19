import { AppDispatch } from "@/common/hooks/useAppDispatch";
import client from "@/setup/apolloClient.setup";
import { RootState } from "@/store/store";
import { setWorkspaces } from "../reducers/workspaceReducer";
import { GET_WORKSPACES } from "../services/overview.gql";

export const getWorkspacesAct = (name: string = "") => {
  return async (dispatch: AppDispatch, _getState: () => RootState) => {
    const response = await client.query({
      query: GET_WORKSPACES,
      variables: { name },
    });
    dispatch(setWorkspaces(response.data?.workspaces));
  };
};
