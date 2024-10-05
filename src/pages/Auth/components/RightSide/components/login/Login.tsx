import { Button } from "@/common/components/shadcn/button";
import { Input } from "@/common/components/shadcn/input";
import Link from "@/common/components/UI/Link";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import {
  AuthStepDescriptions,
  AuthSteps,
} from "@/pages/auth/constants/authStep.const";
import { setAuthStep } from "@/pages/auth/reducers/authStepReducer";
import AuthProviderButtonContainer from "../authProviderButtonContainer/AuthProviderButtonContainer";
import OrContinueWith from "../UI/OrContinueWith";
import StepDescription from "../UI/StepDescription";

function Login() {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-3 text-primary justify-center items-center w-full h-full">
      <StepDescription {...AuthStepDescriptions.Login} />
      <form className=" w-full lg:w-[45%] flex flex-col gap-2">
        <Input className="w-full" placeholder="abc@gmail.com" />
        <Input className="w-full" placeholder="******" type="password" />

        <div className="flex-col flex gap-1 w-full">
          <Button>Login</Button>
          <Link
            onClick={() => dispatch(setAuthStep(AuthSteps.Register))}
            className="text-center"
          >
            Not have an account?
          </Link>
        </div>
        <OrContinueWith />
        <AuthProviderButtonContainer />
      </form>
    </div>
  );
}

export default Login;
