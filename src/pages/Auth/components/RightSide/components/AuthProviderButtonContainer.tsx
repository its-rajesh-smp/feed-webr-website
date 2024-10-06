import { Button } from "@/common/components/shadcn/button";
import { BsGoogle } from "react-icons/bs";

function AuthProviderButtonContainer() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Button variant="outline" icon={<BsGoogle />}>
        Google
      </Button>
    </div>
  );
}

export default AuthProviderButtonContainer;
