import { Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import useThemeClasses from "../../theme/useThemeClasses";
import FloatingElements from "../../components/FloatingElements";
import LoadingScreen from "../../components/LoadingScreen";
import { authUser } from "./test.authuser";
import useAuth from "./useAuth";
import { features, userTypes } from "./contants";
import { Navbar } from "./components/Navbar";
import { Herosection } from "./components/Herosection";
import { Footer } from "./components/Footer";

export const Landingpage = () => {
  const themeClasses = useThemeClasses();
  const {
    showBackToTop,
    isLoading,
    scrollToTop,
  } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (authUser) {
    return <Navigate to={`/${authUser.userType}`} />;
  }

  return (
    <div
      className={`min-h-screen ${themeClasses.bg.main} transition-colors duration-300 relative`}
    >
      {/* floating background Elements */}
      <FloatingElements />

      {/* navbar */}
      <Navbar/>

      {/* hero section */}
     <Herosection/>

      {/* user types card */}
      <section id="about" className={`py-20 ${themeClasses.bg.secondary}`}>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-3xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6`}
            >
              Built for Every Healthcare Role
            </h2>
            <p
              className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}
            >
              Our platform serves different user types with tailored experiences
              and specialized tools
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
                <div
                  className={`w-15 h-15 rounded-2xl bg-gradient-to-br ${userType.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {userType.icon}
                </div>
                <h3
                  className={`text-2xl font-bold ${themeClasses.text.primary} mb-4`}
                >
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

      {/* features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-3xl md:text-5xl font-bold ${themeClasses.text.primary} mb-6`}
            >
              Powerful Features
            </h2>
            <p
              className={`text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}
            >
              Everything you need to manage healthcare operations efficiently
              and securely
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
                <div
                  className={`${themeClasses.text.accent} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-semibold ${themeClasses.text.primary} mb-3`}
                >
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

      {/* CTA section */}
      <section className={`py-20 ${themeClasses.bg.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold ${themeClasses.text.primary} mb-6`}
            >
              Ready to Transform Healthcare Management?
            </h2>
            <p
              className={`text-xl ${themeClasses.text.secondary} mb-8 max-w-2xl mx-auto`}
            >
              Join thousands of healthcare professionals already using our
              platform
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
                  Log in
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* footer */}
      <Footer/>

      {/* back to top button */}
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
