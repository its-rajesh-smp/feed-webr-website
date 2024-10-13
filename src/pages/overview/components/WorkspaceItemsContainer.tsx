import React from "react";
import WorkspaceItem from "./UI/WorkspaceItem";

function WorkspaceItemsContainer() {
  return (
    <div className="flex flex-col gap-4">
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
    </div>
  );
}

export default WorkspaceItemsContainer;
