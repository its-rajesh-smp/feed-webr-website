import { useQuery } from "@apollo/client";
import Workspace from "./UI/Workspace";
import { GET_WORKSPACES } from "../services/overview.gql";
import { IWorkspace } from "../types/overview.type";

function WorkspacesContainer() {
  const { data } = useQuery(GET_WORKSPACES);

  return (
    <div className="flex flex-col gap-4">
      {data?.workspaces.map((workspace: IWorkspace) => (
        <Workspace key={workspace.id} {...workspace} />
      ))}
    </div>
  );
}

export default WorkspacesContainer;
