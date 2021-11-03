import { motion } from "framer-motion";

export default function Modal({ children }) {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="z-50 bg-red-500 fixed top-0 left-0 w-full h-full px-8 py-4"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
