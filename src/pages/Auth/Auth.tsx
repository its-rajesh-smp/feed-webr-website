import AuthLeftSideWindow from "./components/LeftSide/AuthLeftSideWindow";
import AuthRightSideWindow from "./components/RightSide/AuthRightSideWindow";

function Auth() {
  return (
    <div className="flex h-screen w-screen">
      <AuthLeftSideWindow />
      <AuthRightSideWindow />
    </div>
  );
}

export default Auth;
