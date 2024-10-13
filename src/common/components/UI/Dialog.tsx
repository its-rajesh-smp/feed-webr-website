import {
  DialogContent,
  Dialog as DialogPrimitive,
  DialogTrigger,
} from "../shadcn/ui/dialog";

export interface DialogProps {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
}

function Dialog({ children, trigger, open }: DialogProps) {
  return (
    <DialogPrimitive open={open}>
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-6xl">
        {children && children}
      </DialogContent>
    </DialogPrimitive>
  );
}

export default Dialog;
