import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, UserPlus } from "lucide-react";
import useThemeClasses from "../../../theme/useThemeClasses";

export const Herosection = () => {
  const themeClasses = useThemeClasses();
  return (
    <>
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold ${themeClasses.text.primary} mb-6`}
              >
                <span className="block">Revolutionary</span>
                <span
                  className={`block bg-gradient-to-r ${themeClasses.accent.gradient} bg-clip-text text-transparent animate-gradient-x`}
                >
                  Healthcare Management
                </span>
              </h1>
              <p
                className={`text-xl md:text-2xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}
              >
                Connecting cities, hospitals, doctors, and patients through
                intelligent healthcare management that scales across regions
                while maintaining the highest standards of care.
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
              { number: "1M+", label: "Patients Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 rounded-2xl ${themeClasses.bg.card} ${themeClasses.border.primary} border backdrop-blur-sm`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`text-3xl md:text-4xl font-bold ${themeClasses.text.accent} mb-2`}
                >
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
    </>
  );
};
