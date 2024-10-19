import {
  DialogContent,
  Dialog as DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/ui/dialog";

export interface DialogProps {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function Dialog({ children, trigger, open, onOpenChange }: DialogProps) {
  return (
    <DialogPrimitive onOpenChange={onOpenChange} open={open}>
      <DialogTrigger className={`${!trigger && "hidden"}`}>
        {trigger && trigger}
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-full p-0 md:px-2 lg:px-6 overflow-y-scroll">
        <DialogTitle />
        {children && children}
      </DialogContent>
    </DialogPrimitive>
  );
}

export default Dialog;
