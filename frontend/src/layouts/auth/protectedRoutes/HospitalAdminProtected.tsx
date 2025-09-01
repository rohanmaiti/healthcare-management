import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import LoadingScreen from "../../../components/LoadingScreen";

export const HospitalAdminProtected = () => {
  const { authUser, isLoading } = useAppSelector((store) => store.authReducer);

  // Show loading screen while checking authentication
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Only redirect after loading is complete and user is not authenticated
  if (!authUser || authUser?.userType != "hospital-admin") {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};
