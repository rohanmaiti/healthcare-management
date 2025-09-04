import "./App.css";
import HospitalAdminLayout from "./layouts/hospital-admin/HospitalAdminLayout";
import { Route, Routes, Navigate } from "react-router-dom";
import useThemeClasses from "./theme/useThemeClasses";
import { Landingpage } from "./layouts/auth/Landingpage";
import { Loginpage } from "./layouts/auth/components/Loginpage";
import { Signuppage } from "./layouts/auth/components/Signuppage";
import { ForgotPasswordpage } from "./layouts/auth/components/ForgotPasswordpage";
import { IfnotLogin } from "./layouts/auth/protectedRoutes/IfnotLogin";
import { HospitalAdminProtected } from "./layouts/auth/protectedRoutes/HospitalAdminProtected";
import { Dashboard } from "./screens/hospital-admin/dasboard/Dashboard";
import { Toaster } from "react-hot-toast";
import FaviconGenerator from "./components/FaviconGenerator";
import { useEffect } from "react";
import { check } from "./store/slices/auth.slice";
import { useAppDispatch } from "./store/hooks";
// import Employees from "./screens/hospital-admin/Employees";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(check());
    } catch (error: any) {
      console.log(error?.message);
    }
  }, []);

  return (
    <>
      <FaviconGenerator />
      <Routes>
        <Route element={<IfnotLogin />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/forgot-password" element={<ForgotPasswordpage />} />
        </Route>

        <Route element={<HospitalAdminProtected />}>
          <Route path="/hospital-admin" element={<HospitalAdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="employee" element={<Employees />} /> */}
            <Route path="departments" element={<Departments />} />
            <Route path="opd" element={<OPD />} />
            <Route path="patients" element={<Patients />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path='*' element={<h1> 404 not found </h1>} />
      </Routes>
      <Toaster />
    </>
  );
}

// const Employees = () => {
//   const themeClasses = useThemeClasses();
//   return (
//     <div className="p-6">
//       <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
//         Employees
//       </h1>
//       <p className={themeClasses.text.secondary}>Manage hospital employees</p>
//     </div>
//   );
// };

const Departments = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        Departments
      </h1>
      <p className={themeClasses.text.secondary}>Manage hospital departments</p>
    </div>
  );
};

const OPD = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        OPD
      </h1>
      <p className={themeClasses.text.secondary}>Manage OPD operations</p>
    </div>
  );
};

const Patients = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        Patients
      </h1>
      <p className={themeClasses.text.secondary}>Manage patient records</p>
    </div>
  );
};

const Settings = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        Settings
      </h1>
      <p className={themeClasses.text.secondary}>Configure hospital settings</p>
    </div>
  );
};

export default App;
