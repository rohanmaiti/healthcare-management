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
  Building,
  Sun,
  Moon,
  ChevronDown,
  Phone,
  MapPin,
  FileText,
  Building2,
  Globe,
} from "lucide-react";
import useThemeClasses from "../../../theme/useThemeClasses";
import { useThemeContext } from "../../../theme/useTheme";
import FloatingElements from "../../../components/FloatingElements";
import { useSignin } from "./useSignin";

const userTypes = [
  {
    value: "user",
    label: "Patient",
    icon: <User className="w-4 h-4" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    value: "hospital-admin",
    label: "Hospital Admin",
    icon: <Building className="w-4 h-4" />,
    color: "from-purple-500 to-pink-500",
  },
  // { value: 'doctor', label: 'Doctor', icon: <Stethoscope className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' }, // future scope
];

export const Signinpage = () => {
  // Use the custom hook for all form logic
  const {
    firstNameRef,
    lastNameRef,
    emailRef,
    phoneRef,
    passwordRef,
    confirmPasswordRef,
    hospitalNameRef,
    hospitalLocationRef,
    registrationNumberRef,
    hospitalEmailRef,
    hospitalPhone1Ref,
    hospitalPhone2Ref,
    hospitalTypeRef,
    agreeToTermsRef,
    selectedUserTypeValue,
    showPassword,
    showConfirmPassword,
    isDropdownOpen,
    isLoading,
    errors,
    setShowPassword,
    setShowConfirmPassword,
    setIsDropdownOpen,
    handleInputChange,
    handleUserTypeSelect,
    handleSubmit,
  } = useSignin();

  const themeClasses = useThemeClasses();
  const { toggleTheme, isDark } = useThemeContext();

  const selectedUserType = userTypes.find(
    (type) => type.value === selectedUserTypeValue
  );

  return (
    <div className={`min-h-screen ${themeClasses.bg.main} relative`}>
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

      <div className="flex min-h-screen">
        {/* Left Side - Fixed Logo and Info */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-2/5 flex-col justify-center items-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <motion.div
              className="flex justify-center mb-8"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`p-6 rounded-3xl ${themeClasses.accent.gradient} shadow-2xl`}
              >
                <Hospital className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className={`text-4xl font-bold ${themeClasses.text.primary} mb-4`}
              >
                Welcome to Medisync
              </h1>
              <p
                className={`text-xl ${themeClasses.text.secondary} leading-relaxed max-w-md`}
              >
                Join our revolutionary healthcare management platform and
                transform how you manage medical operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              {[
                {
                  icon: <Hospital className="w-5 h-5" />,
                  text: "Multi-hospital management",
                },
                {
                  icon: <User className="w-5 h-5" />,
                  text: "Role-based access control",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  text: "City-wide connectivity",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-left"
                >
                  <div
                    className={`p-2 rounded-lg ${themeClasses.accent.light}`}
                  >
                    <div className={themeClasses.text.accent}>
                      {feature.icon}
                    </div>
                  </div>
                  <span className={`${themeClasses.text.secondary}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 xl:w-3/5 flex flex-col max-h-screen">
          {/* Sticky Header */}
          <div className="sticky top-0 bg-inherit z-20 p-6 lg:p-12 pb-4 lg:pb-6">
            <div className="max-w-md w-full mx-auto">
              {/* Mobile Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:hidden"
              >
                <motion.div
                  className="flex justify-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`p-3 rounded-2xl ${themeClasses.accent.gradient} shadow-lg`}
                  >
                    <Hospital className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <h2
                  className={`text-3xl font-bold ${themeClasses.text.primary} mb-2`}
                >
                  Create Account
                </h2>
                <p className={`${themeClasses.text.secondary}`}>
                  Join Medisync to get started with healthcare management
                </p>
              </motion.div>

              {/* Desktop Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center hidden lg:block"
              >
                <h2
                  className={`text-3xl font-bold ${themeClasses.text.primary} mb-2`}
                >
                  Create Account
                </h2>
                <p className={`${themeClasses.text.secondary}`}>
                  Fill in your details to get started
                </p>
              </motion.div>
            </div>
          </div>

          {/* Scrollable Form Content */}
          <div className="flex-1 overflow-y-auto px-6 lg:px-12 pb-6 lg:pb-12">
            <div className="max-w-md w-full mx-auto space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm rounded-2xl p-8 shadow-xl`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                      >
                        First Name
                      </label>
                      <input
                        ref={firstNameRef}
                        type="text"
                        name="firstName"
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 ${
                          themeClasses.bg.secondary
                        } ${themeClasses.border.primary} border rounded-lg ${
                          themeClasses.text.primary
                        } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          isDark
                            ? "focus:ring-blue-500"
                            : "focus:ring-green-500"
                        } transition-all`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.firstName}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                      >
                        Last Name
                      </label>
                      <input
                        ref={lastNameRef}
                        type="text"
                        name="lastName"
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 ${
                          themeClasses.bg.secondary
                        } ${themeClasses.border.primary} border rounded-lg ${
                          themeClasses.text.primary
                        } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          isDark
                            ? "focus:ring-blue-500"
                            : "focus:ring-green-500"
                        } transition-all`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-1 text-sm text-red-500"
                        >
                          {errors.lastName}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* User Type Selection */}
                  <div>
                    <label
                      className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                    >
                      Account Type
                    </label>
                    <div className="relative">
                      <motion.button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 ${
                          themeClasses.bg.secondary
                        } ${themeClasses.border.primary} border rounded-lg ${
                          themeClasses.text.primary
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          isDark
                            ? "focus:ring-blue-500"
                            : "focus:ring-green-500"
                        } transition-all`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-1.5 rounded-md bg-gradient-to-r ${selectedUserType?.color}`}
                          >
                            {selectedUserType?.icon}
                          </div>
                          <span className="font-medium">
                            {selectedUserType?.label}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
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
                              <div
                                className={`p-1.5 rounded-md bg-gradient-to-r ${type.color}`}
                              >
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
                    <label
                      className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                      />
                      <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 ${
                          themeClasses.bg.secondary
                        } ${themeClasses.border.primary} border rounded-lg ${
                          themeClasses.text.primary
                        } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          isDark
                            ? "focus:ring-blue-500"
                            : "focus:ring-green-500"
                        } transition-all`}
                        placeholder="john@example.com"
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

                  {/* Phone Input */}
                  <div>
                    <label
                      className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                      />
                      <input
                        ref={phoneRef}
                        type="tel"
                        name="phone"
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 ${
                          themeClasses.bg.secondary
                        } ${themeClasses.border.primary} border rounded-lg ${
                          themeClasses.text.primary
                        } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          isDark
                            ? "focus:ring-blue-500"
                            : "focus:ring-green-500"
                        } transition-all`}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-sm text-red-500"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                  {/* Hospital Admin Specific Fields */}
                  {selectedUserTypeValue === "hospital-admin" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 border-t pt-6 mt-6"
                    >
                      <div className="text-center">
                        <h3
                          className={`text-lg font-semibold ${themeClasses.text.primary} mb-2`}
                        >
                          Hospital Information
                        </h3>
                        <p className={`text-sm ${themeClasses.text.secondary}`}>
                          Please provide your hospital details
                        </p>
                      </div>

                      {/* Hospital Name */}
                      <div>
                        <label
                          className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                        >
                          Hospital Name
                        </label>
                        <div className="relative">
                          <Building2
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                          />
                          <input
                            ref={hospitalNameRef}
                            type="text"
                            name="hospitalName"
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 ${
                              themeClasses.bg.secondary
                            } ${
                              themeClasses.border.primary
                            } border rounded-lg ${
                              themeClasses.text.primary
                            } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              isDark
                                ? "focus:ring-blue-500"
                                : "focus:ring-green-500"
                            } transition-all`}
                            placeholder="City General Hospital"
                          />
                        </div>
                        {errors.hospitalName && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.hospitalName}
                          </motion.p>
                        )}
                      </div>

                      {/* Hospital Location */}
                      <div>
                        <label
                          className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                        >
                          Hospital Location
                        </label>
                        <div className="relative">
                          <MapPin
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                          />
                          <input
                            ref={hospitalLocationRef}
                            type="text"
                            name="hospitalLocation"
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 ${
                              themeClasses.bg.secondary
                            } ${
                              themeClasses.border.primary
                            } border rounded-lg ${
                              themeClasses.text.primary
                            } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              isDark
                                ? "focus:ring-blue-500"
                                : "focus:ring-green-500"
                            } transition-all`}
                            placeholder="123 Medical Street, City, State, Country"
                          />
                        </div>
                        {errors.hospitalLocation && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.hospitalLocation}
                          </motion.p>
                        )}
                      </div>

                      {/* Registration Number and Hospital Type */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                          >
                            Registration Number
                          </label>
                          <div className="relative">
                            <FileText
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                            />
                            <input
                              ref={registrationNumberRef}
                              type="text"
                              name="registrationNumber"
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 ${
                                themeClasses.bg.secondary
                              } ${
                                themeClasses.border.primary
                              } border rounded-lg ${
                                themeClasses.text.primary
                              } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                isDark
                                  ? "focus:ring-blue-500"
                                  : "focus:ring-green-500"
                              } transition-all`}
                              placeholder="REG123456789"
                            />
                          </div>
                          {errors.registrationNumber && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-2 text-sm text-red-500"
                            >
                              {errors.registrationNumber}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label
                            className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                          >
                            Hospital Type
                          </label>
                          <select
                            ref={hospitalTypeRef}
                            name="hospitalType"
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 ${
                              themeClasses.bg.secondary
                            } ${
                              themeClasses.border.primary
                            } border rounded-lg ${
                              themeClasses.text.primary
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              isDark
                                ? "focus:ring-blue-500"
                                : "focus:ring-green-500"
                            } transition-all`}
                          >
                            <option value="private">Private Hospital</option>
                            <option value="govt">Government Hospital</option>
                            <option value="semi-govt">Semi-Government</option>
                            <option value="charity">Charity Hospital</option>
                          </select>
                        </div>
                      </div>

                      {/* Hospital Email */}
                      <div>
                        <label
                          className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                        >
                          Hospital Email
                        </label>
                        <div className="relative">
                          <Mail
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                          />
                          <input
                            ref={hospitalEmailRef}
                            type="email"
                            name="hospitalEmail"
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 ${
                              themeClasses.bg.secondary
                            } ${
                              themeClasses.border.primary
                            } border rounded-lg ${
                              themeClasses.text.primary
                            } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                              isDark
                                ? "focus:ring-blue-500"
                                : "focus:ring-green-500"
                            } transition-all`}
                            placeholder="admin@hospital.com"
                          />
                        </div>
                        {errors.hospitalEmail && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.hospitalEmail}
                          </motion.p>
                        )}
                      </div>

                      {/* Hospital Phone Numbers */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                          >
                            Hospital Phone 1 *
                          </label>
                          <div className="relative">
                            <Phone
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                            />
                            <input
                              ref={hospitalPhone1Ref}
                              type="tel"
                              name="hospitalPhone1"
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 ${
                                themeClasses.bg.secondary
                              } ${
                                themeClasses.border.primary
                              } border rounded-lg ${
                                themeClasses.text.primary
                              } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                isDark
                                  ? "focus:ring-blue-500"
                                  : "focus:ring-green-500"
                              } transition-all`}
                              placeholder="+1 (555) 987-6543"
                            />
                          </div>
                          {errors.hospitalPhone1 && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-2 text-sm text-red-500"
                            >
                              {errors.hospitalPhone1}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label
                            className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                          >
                            Hospital Phone 2 (Optional)
                          </label>
                          <div className="relative">
                            <Phone
                              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                            />
                            <input
                              ref={hospitalPhone2Ref}
                              type="tel"
                              name="hospitalPhone2"
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 ${
                                themeClasses.bg.secondary
                              } ${
                                themeClasses.border.primary
                              } border rounded-lg ${
                                themeClasses.text.primary
                              } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                isDark
                                  ? "focus:ring-blue-500"
                                  : "focus:ring-green-500"
                              } transition-all`}
                              placeholder="+1 (555) 987-6544"
                            />
                          </div>
                          {errors.hospitalPhone2 && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-2 text-sm text-red-500"
                            >
                              {errors.hospitalPhone2}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Password Fields */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label
                        className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                      >
                        Password
                      </label>
                      <div className="relative">
                        <Lock
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                        />
                        <input
                          ref={passwordRef}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-12 py-3 ${
                            themeClasses.bg.secondary
                          } ${themeClasses.border.primary} border rounded-lg ${
                            themeClasses.text.primary
                          } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            isDark
                              ? "focus:ring-blue-500"
                              : "focus:ring-green-500"
                          } transition-all`}
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.text.secondary} hover:${themeClasses.text.primary} transition-colors`}
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
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

                    <div>
                      <label
                        className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`}
                        />
                        <input
                          ref={confirmPasswordRef}
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-12 py-3 ${
                            themeClasses.bg.secondary
                          } ${themeClasses.border.primary} border rounded-lg ${
                            themeClasses.text.primary
                          } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            isDark
                              ? "focus:ring-blue-500"
                              : "focus:ring-green-500"
                          } transition-all`}
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.text.secondary} hover:${themeClasses.text.primary} transition-colors`}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-sm text-red-500"
                        >
                          {errors.confirmPassword}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div>
                    <label className="flex items-start space-x-3">
                      <input
                        ref={agreeToTermsRef}
                        type="checkbox"
                        name="agreeToTerms"
                        onChange={handleInputChange}
                        className={`mt-1 rounded ${
                          themeClasses.accent.primary
                        } text-white focus:ring-2 ${
                          isDark
                            ? "focus:ring-blue-500"
                            : "focus:ring-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${themeClasses.text.secondary} leading-relaxed`}
                      >
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className={`${themeClasses.text.accent} hover:underline`}
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className={`${themeClasses.text.accent} hover:underline`}
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-sm text-red-500"
                      >
                        {errors.agreeToTerms}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center px-4 py-3 ${
                      themeClasses.button.primary
                    } text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDark ? "focus:ring-blue-500" : "focus:ring-green-500"
                    } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Create Account</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </motion.button>
                </form>

                {/* Sign In Link */}
                <div className="mt-6 text-center">
                  <p className={`text-sm ${themeClasses.text.secondary}`}>
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className={`font-medium ${themeClasses.text.accent} hover:underline transition-colors`}
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                {/* Back to Home */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center mt-6 mb-8"
                >
                  <Link
                    to="/"
                    className={`text-sm ${themeClasses.text.secondary} hover:${themeClasses.text.primary} transition-colors`}
                  >
                    ← Back to Home
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
