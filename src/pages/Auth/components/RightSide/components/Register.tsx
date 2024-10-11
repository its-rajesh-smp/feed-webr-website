import { Button } from "@/common/components/shadcn/button";
import { Input } from "@/common/components/shadcn/input";
import Link from "@/common/components/UI/Link";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { registerAct } from "@/pages/auth/actions/register.act";
import {
  AuthStepDescriptions,
  AuthSteps,
} from "@/pages/auth/constants/authStep.const";
import { setAuthStep } from "@/pages/auth/reducers/authStepReducer";
import { useState } from "react";
import AuthProviderButtonContainer from "./AuthProviderButtonContainer";
import OrContinueWith from "./UI/OrContinueWith";
import StepDescription from "./UI/StepDescription";

function Register() {
  const dispatch = useAppDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  // Handle Register Button Click
  const onRegisterBtnClick = (e: any) => {
    e.preventDefault();

    // TODO: Use the schema to validate the user credentials
    dispatch(registerAct(userCredentials));
  };

  return (
    <div className="flex flex-col gap-3 text-primary justify-center items-center w-full h-full">
      <StepDescription {...AuthStepDescriptions.Register} />
      <form className=" w-full lg:w-[45%] flex flex-col gap-2">
        <Input
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, email: e.target.value })
          }
          className="w-full"
          placeholder="abc@gmail.com"
        />
        <Input
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, password: e.target.value })
          }
          className="w-full"
          placeholder="******"
          type="password"
        />

        <div className="flex-col flex gap-1 w-full">
          <Button onClick={onRegisterBtnClick}>Register</Button>
          <Link
            onClick={() => dispatch(setAuthStep(AuthSteps.Login))}
            className="text-center"
          >
            {" "}
            Already have an account?{" "}
          </Link>
        </div>
        <OrContinueWith />
        <AuthProviderButtonContainer />
      </form>
    </div>
  );
}

export default Register;
