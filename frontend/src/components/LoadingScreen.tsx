import { motion } from "framer-motion";
import { Hospital } from "lucide-react";
import useThemeClasses from "../theme/useThemeClasses";

const LoadingScreen = () => {
  const themeClasses = useThemeClasses();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${themeClasses.bg.main}`}
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`w-16 h-16 mx-auto mb-4 p-3 rounded-full ${themeClasses.accent.gradient}`}
        >
          <Hospital className="w-full h-full text-white" />
        </motion.div>
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className={`text-2xl font-bold ${themeClasses.text.primary} mb-2`}
        >
          CityHealth
        </motion.h2>
        
        <motion.div
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`h-1 ${themeClasses.accent.primary} rounded-full mx-auto`}
          style={{ maxWidth: '200px' }}
        />
        
        <p className={`mt-4 ${themeClasses.text.secondary}`}>
          Loading your healthcare experience...
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
