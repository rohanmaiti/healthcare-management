import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

export const IfnotLogin = () => {
  const { authUser } = useAppSelector((store) => store.authReducer);

  if (!authUser) {
    return <Outlet />;
  }

  return <Navigate to={`/${authUser?.userType}`} replace />;
};
