import { Button } from "@/common/components/shadcn/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/shadcn/ui/popover";
import { MoreVertical } from "lucide-react";
import { RiDeleteBackLine } from "react-icons/ri";

function WorkspaceAction() {
  return (
    <Popover>
      <PopoverTrigger onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 ">
        <div className="flex flex-col gap-2">
          <Button
            icon={<RiDeleteBackLine />}
            className="justify-start gap-5"
            size="sm"
            variant="outline"
          >
            Remove
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default WorkspaceAction;
