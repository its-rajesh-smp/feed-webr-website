import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router-dom";

function GuestGuard() {
  const isCurrentUserAuthenticated = useAppSelector(
    (state) => state.authUserReducer.isAuthenticated
  );

  if (!isCurrentUserAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/practice" />;
  }
}

export default GuestGuard;
