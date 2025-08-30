
import {
  LayoutDashboard,
  Users,
  Settings,
  HousePlus,
  ClipboardPlus,
  Bed,
  NotebookPen,
  Mail,
  MessageCirclePlus

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
    icon: LayoutDashboard,
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
    icon: HousePlus,
    route: '/hospital-admin/departments'
  },
  {
    id: "opd",
    label: "OPD",
    icon: ClipboardPlus,
    route: '/hospital-admin/opd'
  },
  {
    id: "patients",
    label: "Patients",
    icon:   Bed,
    route: '/hospital-admin/patients'
  },
  {
    id: "notes",
    label: "Notes",
    icon: NotebookPen,
    route: '/hospital-admin/notes'
  },
  {
    id: "mail",
    label: "Mail",
    icon: Mail,
    route: '/hospital-admin/mail'
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageCirclePlus,
    route: '/hospital-admin/message'
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    route: '/hospital-admin/settings'
  },
]