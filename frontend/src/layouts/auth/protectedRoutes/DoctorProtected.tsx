import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import LoadingScreen from "../../../components/LoadingScreen";

export const DoctorProtected = () => {
  const { authUser, isLoading } = useAppSelector((store) => store.authReducer);
  const location = useLocation();

  // Show loading screen while checking authentication
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Only redirect after loading is complete and user is not authenticated
  if (!authUser || authUser?.userType !== "doctor") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
