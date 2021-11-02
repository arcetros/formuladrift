import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, NegIcon } from "../../icons";

const DriverAccordion = (props) => {
  const { i, expanded, setExpanded, title, content } = props;
  const isOpen = i === expanded;
  return (
    <>
      <motion.header
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="text-white font-medium bg-red-500 rounded-xl flex justify-between my-1 p-3 h-auto justify-items-end"
      >
        <p className="flex items-center">{title}</p>
        <div className="bg-red-900 bg-opacity-30 p-1 rounded-full">
          <p className="">{isOpen ? <NegIcon /> : <PlusIcon />}</p>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className="tracking-wide leading-relaxed px-1">{content}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default DriverAccordion;
