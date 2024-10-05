import { Button } from "@/common/components/shadcn/button";
import { Input } from "@/common/components/shadcn/input";
import { Separator } from "@/common/components/shadcn/ui/separator";
import Link from "@/common/components/UI/Link";
import { AuthStepDescriptions } from "@/pages/Auth/constants/authStep.desc";
import { BsGoogle } from "react-icons/bs";
import StepDescription from "../UI/StepDescription";

function Login() {
  return (
    <div className="flex flex-col gap-3 text-primary justify-center items-center w-full h-full">
      <StepDescription {...AuthStepDescriptions.Login} />
      <form className=" w-[45%] flex flex-col gap-2">
        <Input className="w-full" placeholder="abc@gmail.com" />
        <Input className="w-full" placeholder="******" type="password" />

        <div className="flex-col flex gap-1 w-full">
          <Button>Login</Button>
          <Link className="text-center"> Not have an account? </Link>
        </div>
        <div className="flex gap-2 justify-center mt-2 mb-2 items-center">
          <Separator className="w-1/3" />
          <p className="text-xs  ">or continue with</p>
          <Separator className="w-1/3" />
        </div>
        <Button variant="outline" icon={<BsGoogle />}>
          Google
        </Button>
      </form>
    </div>
  );
}

export default Login;
