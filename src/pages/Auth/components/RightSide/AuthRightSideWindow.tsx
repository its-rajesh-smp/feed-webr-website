import { useAppSelector } from "@/common/hooks/useAppSelector";
import { AuthSteps } from "../../constants/authStep.const";
import Login from "./components/Login";
import OTPVerification from "./components/otpVerification/OTPVerification";
import Register from "./components/register/Register";

function AuthRightSideWindow() {
  const currentAuthStep = useAppSelector((state) => state.authStepReducer);

  return (
    <div className="w-full lg:p-5 p-5 lg:w-1/2">
      {currentAuthStep === AuthSteps.Register && <Register />}
      {currentAuthStep === AuthSteps.Login && <Login />}
      {currentAuthStep === AuthSteps.OTPVerification && <OTPVerification />}
    </div>
  );
}

export default AuthRightSideWindow;
