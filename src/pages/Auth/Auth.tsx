import AuthLeftSideWindow from "./components/leftSide/AuthLeftSideWindow";
import AuthRightSideWindow from "./components/rightSide/AuthRightSideWindow";

function Auth() {
  return (
    <div className="flex h-screen w-screen">
      <AuthLeftSideWindow />
      <AuthRightSideWindow />
    </div>
  );
}

export default Auth;
