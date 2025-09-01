import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import LoadingScreen from "../../../components/LoadingScreen";

export const IfnotLogin = () => {
  const { authUser, isLoading } = useAppSelector((store) => store.authReducer);

  // Show loading screen while checking authentication
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Only make routing decisions after loading is complete
  if (!authUser) {
    return <Outlet />;
  }

  return <Navigate to={`/${authUser?.userType}`} replace />;
};
