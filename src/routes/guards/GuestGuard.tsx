import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router-dom";
import PRIVATE_ROUTE_PATHS from "../private/privateRoutePaths.const";

function GuestGuard() {
  const isCurrentUserAuthenticated = useAppSelector(
    (state) => state.authUserReducer.isAuthenticated
  );

  if (!isCurrentUserAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={PRIVATE_ROUTE_PATHS.OVERVIEW} />;
  }
}

export default GuestGuard;
