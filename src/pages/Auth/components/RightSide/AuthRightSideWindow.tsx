import OTPVerification from "./components/otpVerification/OTPVerification";

function AuthRightSideWindow() {
  return (
    <div className="w-full lg:p-5 p-5 lg:w-1/2">
      {/* <Register /> */}
      {/* <Login /> */}
      <OTPVerification />
    </div>
  );
}

export default AuthRightSideWindow;
