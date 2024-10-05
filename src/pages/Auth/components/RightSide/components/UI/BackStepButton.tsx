import { ArrowLeft } from "lucide-react";

function BackStepButton() {
  return (
    <div className="flex gap-2 items-center cursor-pointer w-fit hover:underline underline-offset-2">
      <ArrowLeft />
      <p>Back</p>
    </div>
  );
}

export default BackStepButton;
