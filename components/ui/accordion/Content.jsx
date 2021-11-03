import { motion } from "framer-motion";

export const Content = ({ content }) => {
  return (
    <motion.section
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      transition={{ duration: 1.2, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <p className="tracking-wide leading-relaxed px-1">{content}</p>
    </motion.section>
  );
};
