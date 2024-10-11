import AuthLeftSideWindow from "./components/leftSide/AuthLeftSideWindow";
import AuthRightSideWindow from "./components/rightSide/AuthRightSideWindow";
import useRedirectToAuthStepBasedOnUrl from "./hooks/useRedirectToAuthStepBasedOnUrl";

function Auth() {
  useRedirectToAuthStepBasedOnUrl();

  return (
    <div className="flex h-screen w-screen">
      <AuthLeftSideWindow />
      <AuthRightSideWindow />
    </div>
  );
}

export default Auth;
