import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import LoadingScreen from "../../../components/LoadingScreen";

export const InventoryManagerProtected = () => {
  const { authUser, isLoading } = useAppSelector((store) => store.authReducer);
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!authUser || authUser?.userType !== "inventory-manager") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
