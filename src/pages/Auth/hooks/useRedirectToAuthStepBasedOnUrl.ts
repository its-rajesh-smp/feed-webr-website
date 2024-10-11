import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AuthSteps } from "../constants/authStep.const";
import { setAuthStep } from "../reducers/authStepReducer";

/**
 * Redirects to the appropriate auth step based on the url
 */
function useRedirectToAuthStepBasedOnUrl() {
  const dispatch = useDispatch();
  const params = useLocation();

  useEffect(() => {
    if (params.pathname.includes("register")) {
      dispatch(setAuthStep(AuthSteps.Register));
    }
  }, []);
}

export default useRedirectToAuthStepBasedOnUrl;
