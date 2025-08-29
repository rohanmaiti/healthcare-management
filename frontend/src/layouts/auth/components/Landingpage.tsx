import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Hospital, 
  Users, 
  Activity, 
  Shield, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Stethoscope,
  UserPlus,
  Building,
  Heart,
  ChevronUp
} from "lucide-react";
import useThemeClasses from "../../../theme/useThemeClasses";
import { useTheme } from "../../../theme/useTheme";
import FloatingElements from "../../../components/FloatingElements";
import LoadingScreen from "../../../components/LoadingScreen";

export const Landingpage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const themeClasses = useThemeClasses();
  const { toggleTheme, isDark } = useTheme();

  // Comment out auth check for now to show landing page
  // const authUser = {
  //   _id: 123,
  //   userType: 'hospital-admin'
  // }  

  // if( authUser ) {
  //   return <Navigate to={`/${authUser?.userType}`} />
  // }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);
      setShowBackToTop(scrollPosition > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const features = [
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Hospital Management",
      description: "Comprehensive hospital administration and resource management across multiple locations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-User System",
      description: "Role-based access for doctors, patients, and hospital administrators with secure authentication."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "City-wide Coverage",
      description: "Connect and manage healthcare facilities across different cities and regions seamlessly."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "Track patient data, appointments, and hospital resources in real-time with advanced analytics."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Compliant",
      description: "HIPAA compliant with enterprise-grade security to protect sensitive medical information."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Round-the-clock system availability ensuring continuous access to critical healthcare data."
    }
  ];

  const userTypes = [
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Doctors",
      description: "Access patient records, manage appointments, and collaborate with colleagues.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Patients",
      description: "Book appointments, view medical history, and communicate with healthcare providers.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Hospital Admins",
      description: "Manage hospital operations, staff, resources, and system configurations.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg.main} transition-colors duration-300 relative`}>
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? `${themeClasses.bg.topbar} ${themeClasses.border.primary} border-b backdrop-blur-md shadow-lg ${isDark ? 'shadow-blue-900/20' : 'shadow-green-500/10'}`
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`p-2 rounded-lg ${themeClasses.accent.gradient}`}>
                <Hospital className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${themeClasses.text.primary}`}>
                CityHealth
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors duration-200`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.bg.hover} ${themeClasses.text.secondary} transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <motion.button
                    className={`px-4 py-2 rounded-lg ${themeClasses.button.ghost} transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    className={`px-4 py-2 rounded-lg ${themeClasses.button.primary} transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.bg.hover} ${themeClasses.text.secondary}`}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${themeClasses.bg.hover} ${themeClasses.text.secondary}`}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${themeClasses.bg.topbar} ${themeClasses.border.primary} border-t backdrop-blur-md`}
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block ${themeClasses.text.secondary} hover:${themeClasses.text.accent} transition-colors`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Link to="/login" className="block">
                    <button className={`w-full px-4 py-2 rounded-lg ${themeClasses.button.ghost} text-center`}>
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" className="block">
                    <button className={`w-full px-4 py-2 rounded-lg ${themeClasses.button.primary} text-center`}>
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${themeClasses.text.primary} mb-6`}>
                <span className="block">Revolutionary</span>
                <span className={`block bg-gradient-to-r ${themeClasses.accent.gradient} bg-clip-text text-transparent animate-gradient-x`}>
                  Healthcare Management
                </span>
              </h1>
              <p className={`text-xl md:text-2xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
                Connecting cities, hospitals, doctors, and patients through intelligent healthcare management 
                that scales across regions while maintaining the highest standards of care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link to="/signup">
                <motion.button
                  className={`px-8 py-4 rounded-xl ${themeClasses.button.primary} text-lg font-semibold flex items-center space-x-2 shadow-lg`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Get Started</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button
                className={`px-8 py-4 rounded-xl ${themeClasses.button.ghost} text-lg font-semibold border ${themeClasses.border.primary}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Hospitals Connected" },
              { number: "10K+", label: "Healthcare Professionals" },
              { number: "1M+", label: "Patients Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl ${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-3xl md:text-4xl font-bold ${themeClasses.text.accent} mb-2`}>
                  {stat.number}
                </div>
                <div className={`${themeClasses.text.secondary} font-medium`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Types Section */}
      <section id="about" className={`py-20 ${themeClasses.bg.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Built for Every Healthcare Role
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
              Our platform serves different user types with tailored experiences and specialized tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm group hover:shadow-2xl transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${userType.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {userType.icon}
                </div>
                <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4`}>
                  {userType.title}
                </h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                  {userType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Powerful Features
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
              Everything you need to manage healthcare operations efficiently and securely
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm group hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`${themeClasses.text.accent} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold ${themeClasses.text.primary} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${themeClasses.bg.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.text.primary} mb-6`}>
              Ready to Transform Healthcare Management?
            </h2>
            <p className={`text-xl ${themeClasses.text.secondary} mb-8 max-w-2xl mx-auto`}>
              Join thousands of healthcare professionals already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <motion.button
                  className={`px-8 py-4 rounded-xl ${themeClasses.button.primary} text-lg font-semibold flex items-center space-x-2 shadow-lg`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Free Trial</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button
                  className={`px-8 py-4 rounded-xl ${themeClasses.button.ghost} text-lg font-semibold border ${themeClasses.border.primary}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${themeClasses.border.primary} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className={`p-2 rounded-lg ${themeClasses.accent.gradient}`}>
                <Hospital className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${themeClasses.text.primary}`}>
                CityHealth
              </span>
            </div>
            <div className={`${themeClasses.text.secondary} text-center md:text-right`}>
              <p>&copy; 2025 CityHealth. All rights reserved.</p>
              <p className="text-sm mt-1">Revolutionizing healthcare management across cities.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full ${themeClasses.button.primary} shadow-lg hover:shadow-xl transition-shadow`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
