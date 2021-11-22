import { motion, AnimatePresence } from "framer-motion";
import Icon from "../icon/";

export const Accordion = (props) => {
  const { setExpanded, isOpen, i, title } = props;
  return (
    <motion.header
      initial={false}
      onClick={() => setExpanded(isOpen ? false : i)}
      className=" text-white font-medium bg-coral-500 rounded-lg flex justify-between my-1 p-3 lg:p-5"
    >
      <p className="flex items-center text-white lg:text-xl">{title}</p>
      <div className="bg-coral-500 p-1 lg:p-2 rounded-full">
        <span className="">
          {isOpen ? <Icon type="NegIcon" /> : <Icon type="PlusIcon" />}
        </span>
      </div>
    </motion.header>
  );
};
