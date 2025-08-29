import { motion } from "framer-motion";
import useThemeClasses from "../theme/useThemeClasses";

const FloatingElements = () => {
  const themeClasses = useThemeClasses();

  const elements = [
    { size: 60, delay: 0, x: 10, y: 20 },
    { size: 80, delay: 2, x: 80, y: 10 },
    { size: 40, delay: 4, x: 60, y: 70 },
    { size: 100, delay: 1, x: 20, y: 60 },
    { size: 50, delay: 3, x: 90, y: 40 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${themeClasses.accent.light} opacity-20`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
