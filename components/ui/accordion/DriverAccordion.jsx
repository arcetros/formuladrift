import { motion, AnimatePresence } from "framer-motion";
import { Accordion } from "./Accordion";
import { Content } from "./Content";

const DriverAccordion = (props) => {
  const { i, expanded, setExpanded, title, content } = props;
  const isOpen = i === expanded;
  return (
    <>
      <Accordion
        setExpanded={setExpanded}
        isOpen={isOpen}
        i={i}
        title={title}
      />
      <AnimatePresence initial={false}>
        {isOpen && <Content content={content} />}
      </AnimatePresence>
    </>
  );
};

export default DriverAccordion;
