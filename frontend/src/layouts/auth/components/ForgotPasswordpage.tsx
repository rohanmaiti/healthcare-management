import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Hospital, 
  Mail, 
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sun,
  Moon,
  RefreshCw
} from "lucide-react";
import useThemeClasses from "../../../theme/useThemeClasses";
import { useThemeContext } from "../../../theme/useTheme";
import FloatingElements from "../../../components/FloatingElements";

export const ForgotPasswordpage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState('');

  const themeClasses = useThemeClasses();
  const { toggleTheme, isDark } = useThemeContext();

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsEmailSent(true);
      console.log('Password reset email sent to:', email);
    }, 2000);
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Password reset email resent to:', email);
    }, 1000);
  };

  if (isEmailSent) {
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

        <div className="max-w-md w-full space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Success Icon */}
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={`p-4 rounded-full ${themeClasses.accent.light}`}>
                <CheckCircle className={`w-16 h-16 ${themeClasses.text.accent}`} />
              </div>
            </motion.div>

            <h2 className={`text-3xl font-bold ${themeClasses.text.primary} mb-4`}>
              Check Your Email
            </h2>
            <p className={`${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              We've sent a password reset link to{' '}
              <span className={`font-medium ${themeClasses.text.primary}`}>
                {email}
              </span>
              . Please check your inbox and follow the instructions to reset your password.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm rounded-2xl p-8 shadow-xl`}
            >
              <div className="space-y-6">
                <div className={`p-4 rounded-lg ${themeClasses.bg.secondary} text-center`}>
                  <p className={`text-sm ${themeClasses.text.secondary} mb-4`}>
                    Didn't receive the email? Check your spam folder or
                  </p>
                  <motion.button
                    onClick={handleResendEmail}
                    disabled={isLoading}
                    className={`flex items-center justify-center space-x-2 mx-auto px-6 py-2 ${themeClasses.button.ghost} rounded-lg transition-all disabled:opacity-50`}
                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Resending...</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4" />
                        <span>Resend Email</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="flex flex-col space-y-3">
                  <Link to="/login">
                    <motion.button
                      className={`w-full flex items-center justify-center space-x-2 px-4 py-3 ${themeClasses.button.primary} text-lg font-semibold rounded-lg transition-all`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      <span>Back to Login</span>
                    </motion.button>
                  </Link>
                  
                  <Link to="/">
                    <motion.button
                      className={`w-full px-4 py-3 ${themeClasses.button.ghost} font-medium rounded-lg border ${themeClasses.border.primary} transition-all`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Go to Home
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

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

      <div className="max-w-md w-full space-y-8 relative z-10">
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
            Forgot Password?
          </h2>
          <p className={`${themeClasses.text.secondary} leading-relaxed`}>
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm rounded-2xl p-8 shadow-xl`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text.primary} mb-2`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${themeClasses.text.secondary}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  className={`w-full pl-10 pr-4 py-3 ${themeClasses.bg.secondary} ${themeClasses.border.primary} border rounded-lg ${themeClasses.text.primary} placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDark ? 'focus:ring-blue-500' : 'focus:ring-green-500'} transition-all`}
                  placeholder="Enter your email address"
                  autoFocus
                />
              </div>
              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm text-red-500"
                >
                  {error}
                </motion.p>
              )}
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
                  <span>Sending Reset Link...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Send Reset Link</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </motion.button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link 
              to="/login"
              className={`inline-flex items-center space-x-2 text-sm ${themeClasses.text.secondary} hover:${themeClasses.text.primary} transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Login</span>
            </Link>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-center p-4 rounded-lg ${themeClasses.bg.secondary} ${themeClasses.border.primary} border`}
        >
          <p className={`text-sm ${themeClasses.text.secondary} mb-2`}>
            Remember your password?
          </p>
          <Link 
            to="/login"
            className={`font-medium ${themeClasses.text.accent} hover:underline transition-colors`}
          >
            Sign in here
          </Link>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
