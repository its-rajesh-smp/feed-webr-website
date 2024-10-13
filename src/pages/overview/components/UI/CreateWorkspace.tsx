import { Button } from "@/common/components/shadcn/button";
import { Plus } from "lucide-react";

function CreateWorkspace() {
  return (
    <div>
      <Button
        containerClassName="md:block hidden"
        icon={<Plus />}
        type="button"
      >
        Create New Workspace
      </Button>
    </div>
  );
}

export default CreateWorkspace;
