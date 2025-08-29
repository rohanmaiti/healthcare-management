import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authUser } from "../test.authuser";

export const HospitalAdminProtected = () => {

  if (!authUser || authUser?.userType != 'hospital-admin') {
    return <Navigate to={'/login'} />
  }
  
  return <Outlet />;

  
};
