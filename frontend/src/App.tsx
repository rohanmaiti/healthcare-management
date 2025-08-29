import "./App.css";
import HospitalAdminLayout from "./layouts/hospital-admin/HospitalAdminLayout";
import { Route, Routes, Navigate } from "react-router-dom";
import useThemeClasses from "./theme/useThemeClasses";
import { Landingpage } from "./layouts/auth/components/Landingpage";
import { Loginpage } from "./layouts/auth/components/Loginpage";
import { Signinpage } from "./layouts/auth/components/Signinpage";
import { ForgotPasswordpage } from "./layouts/auth/components/ForgotPasswordpage";
import { IfnotLogin } from "./layouts/auth/protectedRoutes/IfnotLogin";
import { HospitalAdminProtected } from "./layouts/auth/protectedRoutes/HospitalAdminProtected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} /> 

        <Route element={<IfnotLogin />}>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signinpage />} />
          <Route path="/forgot-password" element={<ForgotPasswordpage />} />
        </Route>

        <Route path="/" element={<HospitalAdminProtected/>} >
        <Route path="/hospital-admin" element={<HospitalAdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employee" element={<Employees />} />
          <Route path="departments" element={<Departments />} />
          <Route path="opd" element={<OPD />} />
          <Route path="patients" element={<Patients />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </Route>
      
    </Routes>
  );
}

// Placeholder components - you can replace these with your actual components
const Dashboard = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        Dashboard
      </h1>
      <p className={themeClasses.text.secondary}>
        Welcome to the Hospital Admin Dashboard
      </p>
    </div>
  );
};

const Employees = () => {
  const themeClasses = useThemeClasses();
  return (
    <div className="p-6">
      <h1 className={`text-2xl font-bold mb-4 ${themeClasses.text.primary}`}>
        Employees
      </h1>
      <p className={themeClasses.text.secondary}>Manage hospital employees</p>
    </div>
  );
};

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
