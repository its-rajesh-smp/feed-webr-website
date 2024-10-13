import { Button } from "@/common/components/shadcn/button";
import Dialog from "@/common/components/UI/Dialog";
import { Plus } from "lucide-react";
import WorkspaceItemCreator from "../WorkspaceItemCreator/WorkspaceItemCreator";

function CreateWorkspace() {
  return (
    <Dialog
      trigger={
        <Button
          containerClassName="md:block hidden"
          icon={<Plus />}
          type="button"
        >
          Create New Workspace
        </Button>
      }
    >
      <WorkspaceItemCreator />
    </Dialog>
  );
}

export default CreateWorkspace;
