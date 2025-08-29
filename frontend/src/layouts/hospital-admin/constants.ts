
import {
  Home,
  Users,
  Heart,
  Calendar,
  Settings,

} from "lucide-react";
interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  route: string
}

 export const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    route: '/hospital-admin/dashboard'
  },
  {
    id: "employees",
    label: "Employees",
    icon: Users,
    route: '/hospital-admin/employee'
  },
   {
    id: "departments",
    label: "Departments",
    icon: Calendar,
    route: '/hospital-admin/departments'
  },
  {
    id: "opd",
    label: "OPD",
    icon: Heart,
    route: '/hospital-admin/opd'
  },
  {
    id: "patients",
    label: "Patients",
    icon: Calendar,
    route: '/hospital-admin/patients'
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    route: '/hospital-admin/settings'
  },
]