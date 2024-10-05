import { Separator } from "@/common/components/shadcn/ui/separator";

function OrContinueWith() {
  return (
    <div className="flex overflow-hidden gap-2 justify-center mt-2 mb-2 items-center">
      <Separator />
      <p className="text-xs text-nowrap">or continue with</p>
      <Separator />
    </div>
  );
}

export default OrContinueWith;
