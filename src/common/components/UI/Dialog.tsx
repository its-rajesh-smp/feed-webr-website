import {
  DialogContent,
  Dialog as DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/ui/dialog";

export interface DialogProps {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  triggerAsChild?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  dialogContentClassName?: string;
}

function Dialog({
  children,
  trigger,
  open,
  onOpenChange,
  triggerAsChild,
  dialogContentClassName,
}: DialogProps) {
  return (
    <DialogPrimitive onOpenChange={onOpenChange} open={open}>
      <DialogTrigger
        asChild={triggerAsChild}
        className={`${!trigger && "hidden"}`}
      >
        {trigger && trigger}
      </DialogTrigger>
      <DialogContent
        className={`max-w-6xl h-full p-0 md:px-2 lg:px-6 overflow-y-scroll ${dialogContentClassName}`}
      >
        <DialogTitle className="hidden" />
        {children && children}
      </DialogContent>
    </DialogPrimitive>
  );
}

export default Dialog;
