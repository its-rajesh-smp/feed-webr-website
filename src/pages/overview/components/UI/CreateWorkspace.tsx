import { Button } from "@/common/components/shadcn/button";
import Dialog from "@/common/components/UI/Dialog";
import { Plus } from "lucide-react";

import { useState } from "react";
import { WorkspaceCreatorContextProvider } from "../../context/WorkspaceCreatorContext";
import WorkspaceCreator from "../WorkspaceCreator/WorkspaceCreator";

function CreateWorkspace() {
  const [isCreateWorkspaceDialogOpen, setIsCreateWorkspaceDialogOpen] =
    useState(false);
  return (
    <Dialog
      open={isCreateWorkspaceDialogOpen}
      onOpenChange={setIsCreateWorkspaceDialogOpen}
      trigger={
        <Button
          onClick={() => setIsCreateWorkspaceDialogOpen(true)}
          containerClassName="md:block hidden"
          icon={<Plus />}
          type="button"
        >
          Create New Workspace
        </Button>
      }
    >
      <WorkspaceCreatorContextProvider
        setIsCreateWorkspaceDialogOpen={setIsCreateWorkspaceDialogOpen}
      >
        <WorkspaceCreator />
      </WorkspaceCreatorContextProvider>
    </Dialog>
  );
}

export default CreateWorkspace;
