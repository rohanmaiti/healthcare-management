import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import LoadingScreen from "../../../components/LoadingScreen";

export const PatientProtected = () => {
  const { authUser, isLoading } = useAppSelector((store) => store.authReducer);
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!authUser || authUser?.userType !== "user") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
