import { useAppSelector } from "@/common/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router-dom";

function PrivateGuard() {
  const isCurrentUserAuthenticated = useAppSelector(
    (state) => state.authUserReducer.isAuthenticated
  );

  if (isCurrentUserAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateGuard;
