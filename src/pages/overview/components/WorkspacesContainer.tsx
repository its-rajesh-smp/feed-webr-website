import { useAppSelector } from "@/common/hooks/useAppSelector";
import Workspace from "./UI/Workspace";

function WorkspacesContainer() {
  const { workspaces } = useAppSelector((state) => state.workspaceReducer);

  return (
    <div className="flex flex-col gap-4">
      {workspaces?.map((workspace) => (
        <Workspace key={workspace.id} {...workspace} />
      ))}
    </div>
  );
}

export default WorkspacesContainer;
