import Workspace from "./UI/Workspace";

function WorkspacesContainer() {
  return (
    <div className="flex flex-col gap-4">
      <Workspace />
      <Workspace />
      <Workspace />
      <Workspace />
      <Workspace />
    </div>
  );
}

export default WorkspacesContainer;
