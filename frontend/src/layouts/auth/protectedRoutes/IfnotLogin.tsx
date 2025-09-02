import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import LoadingScreen from "../../../components/LoadingScreen";

export const IfnotLogin = () => {
  const { authUser, isLoading } = useAppSelector((store) => store.authReducer);
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (authUser && location.pathname === "/") {
    return <Navigate to={`/${authUser.userType}`} replace />;
  }

  if (authUser && ["/login", "/signup", "/forgot-password"].includes(location.pathname)) {
    return <Navigate to={`/${authUser.userType}`} replace />;
  }
  
  return <Outlet />;
};
