import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

export const HospitalAdminProtected = () => {
  const { authUser } = useAppSelector((store) => store.authReducer);

  if (!authUser || authUser?.userType != "hospital-admin") {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};
