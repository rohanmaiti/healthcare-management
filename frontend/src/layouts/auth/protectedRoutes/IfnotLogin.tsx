import { Navigate, Outlet } from 'react-router-dom';
import { authUser } from '../test.authuser';

export const IfnotLogin = () => {



  if (!authUser) {
   return  <Outlet/>
  }
  
  return (
    <Navigate to={`/${authUser?.userType}`} replace />
  )
}
