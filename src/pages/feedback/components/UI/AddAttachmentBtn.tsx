import Dialog from "@/common/components/UI/Dialog";
import AddAttachment from "../AddAttachment";
import { useState } from "react";
import { Button } from "@/common/components/shadcn/button";
import { Paperclip } from "lucide-react";

function AddAttachmentBtn() {
  const [isAddAttachmentDialogOpen, setIsAddAttachmentDialogOpen] =
    useState(false);

  return (
    <Dialog
      open={isAddAttachmentDialogOpen}
      onOpenChange={setIsAddAttachmentDialogOpen}
      triggerAsChild
      dialogContentClassName="h-1/2 w-1/2 overflow-hidden"
      trigger={
        <Button className="w-full flex items-center justify-center">
          <Paperclip className="mr-2 h-4 w-4" /> Attach file
        </Button>
      }
    >
      <AddAttachment
        setIsAddAttachmentDialogOpen={setIsAddAttachmentDialogOpen}
      />
    </Dialog>
  );
}

export default AddAttachmentBtn;
