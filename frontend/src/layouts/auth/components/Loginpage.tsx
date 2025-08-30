import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Hospital, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  Stethoscope,
  Building,
  Package,
  UserCheck,
  Sun,
  Moon,
  ChevronDown
} from "lucide-react";
import useThemeClasses from "../../../theme/useThemeClasses";
import { useThemeContext } from "../../../theme/useTheme";
import FloatingElements from "../../../components/FloatingElements";
import { useLogin } from "./useLogin";

const userTypes = [
  { value: 'user', label: 'Patient', icon: <User className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' },
  { value: 'doctor', label: 'Doctor', icon: <Stethoscope className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
  { value: 'hospital-admin', label: 'Hospital Admin', icon: <Building className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
  { value: 'inventory-manager', label: 'Inventory Manager', icon: <Package className="w-4 h-4" />, color: 'from-orange-500 to-red-500' },
  { value: 'receptionist', label: 'Receptionist', icon: <UserCheck className="w-4 h-4" />, color: 'from-teal-500 to-cyan-500' }
];

export const Loginpage = () => {
  // Use the custom hook for all form logic
  const {
    emailRef,
    passwordRef,
    showPassword,
    isDropdownOpen,
    isLoading,
    errors,
    selectedUserTypeValue,
    setShowPassword,
    setIsDropdownOpen,
    handleInputChange,
    handleUserTypeSelect,
    handleSubmit
  } = useLogin();

  const themeClasses = useThemeClasses();
  const { toggleTheme, isDark } = useThemeContext();

  const selectedUserType = userTypes.find(type => type.value === selectedUserTypeValue);

  

  return (
    <div className={`min-h-screen ${themeClasses.bg.main} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative`}>
      <FloatingElements />
      
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${themeClasses.bg.card} ${themeClasses.border.primary} border ${themeClasses.text.secondary} shadow-lg backdrop-blur-sm`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      <div className="max-w-md w-full space-y-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`p-3 rounded-2xl ${themeClasses.accent.gradient} shadow-lg`}>
              <Hospital className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-2`}>
            Welcome Back
          </h2>
          <p className={`${themeClasses.text.secondary}`}>
            Login to your account to continue
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm rounded-2xl p-8 shadow-xl`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                Sign in as
              </label>
              <div className="relative">
                <motion.button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 ${themeClasses.bg.secondary} ${themeClasses.border.primary} border rounded-lg ${themeClasses.text.primary} focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'} transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-1.5 rounded-md bg-gradient-to-r ${selectedUserType?.color}`}>
                      {selectedUserType?.icon}
                    </div>
                    <span className="font-medium">{selectedUserType?.label}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-full left-0 right-0 mt-2 ${themeClasses.bg.card} ${themeClasses.border.primary} border rounded-lg shadow-lg z-50 backdrop-blur-sm`}
                  >
                    {userTypes.map((type) => (
                      <motion.button
                        key={type.value}
                        type="button"
                        onClick={() => handleUserTypeSelect(type.value)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 ${themeClasses.text.primary} hover:${themeClasses.bg.hover} transition-colors first:rounded-t-lg last:rounded-b-lg`}
                        whileHover={{ x: 4 }}
                      >
                        <div className={`p-1.5 rounded-md bg-gradient-to-r ${type.color}`}>
                          {type.icon}
                        </div>
                        <span className="font-medium">{type.label}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`} />
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 ${themeClasses.bg.secondary} ${themeClasses.border.primary} border rounded-lg ${themeClasses.text.primary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'} transition-all`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`} />
                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 ${themeClasses.bg.secondary} ${themeClasses.border.primary} border rounded-lg ${themeClasses.text.primary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'} transition-all`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.text.secondary} hover:${themeClasses.text.primary} transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm text-red-500"
                >
                  {errors.password}
                </motion.p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className={`rounded ${themeClasses.accent.primary} text-white focus:ring-2 ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'}`}
                />
                <span className={`ml-2 text-sm ${themeClasses.text.secondary}`}>
                  Remember me
                </span>
              </label>
              <Link 
                to="/forgot-password"
                className={`text-sm ${themeClasses.text.accent} hover:underline transition-colors`}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center px-4 py-3 ${themeClasses.button.primary} text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'} transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Loging in...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 cursor-pointer ">
                  <span>Log In</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className={`text-sm ${themeClasses.text.secondary}`}>
              Don't have an account?{' '}
              <Link 
                to="/signup"
                className={`font-medium ${themeClasses.text.accent} hover:underline transition-colors`}
              >
                Login up here
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link 
            to="/"
            className={`text-sm ${themeClasses.text.secondary} hover:${themeClasses.text.primary} transition-colors`}
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
