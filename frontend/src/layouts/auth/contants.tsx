import {
  Hospital,
  Users,
  Activity,
  ShieldPlus,
  Clock,
  MapPin,
  Stethoscope,
  Building,
  Heart,
  BriefcaseMedical,
  UserStar,
  Shield
} from "lucide-react";

export const navItems = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const features = [
  {
    icon: <Hospital className="w-8 h-8" />,
    title: "Hospital Management",
    description:
      "Comprehensive hospital administration and resource management across multiple locations.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Multi-User System",
    description:
      "Role-based access for doctors, patients, and hospital administrators with secure authentication.",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "City-wide Coverage",
    description:
      "Connect and manage healthcare facilities across different cities and regions seamlessly.",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Real-time Monitoring",
    description:
      "Track patient data, appointments, and hospital resources in real-time with advanced analytics.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Compliant",
    description:
      "HIPAA compliant with enterprise-grade security to protect sensitive medical information.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Availability",
    description:
      "Round-the-clock system availability ensuring continuous access to critical healthcare data.",
  },
];

export const userTypes = [
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: "Doctors",
    description:
      "Access patient records, manage appointments, and collaborate with colleagues.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Patients",
    description:
      "Book appointments, view medical history, and communicate with healthcare providers.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Building className="w-10 h-10" />,
    title: "Hospital Admins",
    description:
      "Manage hospital operations, staff, resources, and system configurations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <BriefcaseMedical className="w-10 h-10" />,
    title: "Inventory Manager",
    description:
      "Monitor medical supplies, equipment maintenance, and inventory levels across departments.",
    color: "from-orange-500 to-red-500",
  },

  {
    icon: <UserStar className="w-10 h-10" />,
    title: "Receptionist",
    description:
      "Handle patient check-ins, appointment scheduling, and front desk operations efficiently.",
    color: "from-teal-500 to-cyan-500",
  },

  {
    icon: <ShieldPlus className="w-10 h-10" />,
    title: "Nurse",
    description:
      "Ensure hospital stability, monitor access control, and maintain safe healthcare environment.",
    color: "from-gray-600 to-slate-700",
  },

];
