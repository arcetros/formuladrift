import { useEffect, useState, useRef } from "react";
import moment from "moment";
import { motion, useAnimation } from "framer-motion";
import { ShareIcon, ReturnIcon, DownArrow } from "./icons";

export const BottomSheet = ({ isOpen, onClose, onOpen, posts }) => {
  const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function usePrevious(value) {
    const previousValueRef = useRef();

    useEffect(() => {
      previousValueRef.current = value;
    }, [value]);

    return previousValueRef.current;
  }

  return (
    <motion.div
      drag="y"
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400,
      }}
      dragConstraints={{ bottom: 0, top: -250 }}
      dragElastic={0.2}
      className="z-30 absolute bg-white rounded-t-lg py-4 px-8 text-gray-900"
    >
      <div className="absolute -top-7 right-8 bg-white rounded-full shadow-xl p-4">
        <ShareIcon />
      </div>
      <h1 className="font-bold text-gray-800 text-lg mt-6">{posts.title}</h1>
      <div className="flex justify-between my-5 text-gray-500">
        <div>{moment(posts.created_at).format("LL")}</div>
      </div>
      <p className="overflow-x-hidden tracking-wide leading-relaxed">
        {posts.content}
      </p>
    </motion.div>
  );
};
