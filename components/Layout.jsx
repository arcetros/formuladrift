import { motion, AnimatePresence } from "framer-motion";

export const Layout = ({ children, route, styles }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
        className="flex-grow mx-auto pt-24"
      >
        {children}
      </motion.main>
    </div>
  );
};
