import { Button } from "@/common/components/shadcn/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/common/components/shadcn/ui/input-otp";
import { AuthStepDescriptions } from "../../../../constants/authStep.desc";
import BackStepButton from "../UI/BackStepButton";
import StepDescription from "../UI/StepDescription";

function OTPVerification() {
  return (
    <div className="flex flex-col w-full h-full">
      <BackStepButton />
      <div className="flex flex-col gap-5 text-primary justify-center items-center w-full h-full">
        <StepDescription {...AuthStepDescriptions.OTPVerification} />
        <form className="w-[45%] flex flex-col gap-5 items-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button className="w-full">Verify</Button>
          <Button variant="outline">Resend</Button>
        </form>
      </div>
    </div>
  );
}

export default OTPVerification;
