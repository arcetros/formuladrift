import moment from "moment";
import { motion } from "framer-motion";
import { DotIcon } from "./icons";
import Image from "./Image";
import { Typography } from "./Typography";
import { dropIn } from "./animations";
import { ReturnButton } from "./Button";
import { DriverListCard } from "./Card";

export const FullModal = ({ children }) => {
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
};

export const Modal = ({ handleClose, data, driver }) => {
  return (
    <FullModal>
      <div className="flex justify-between items-center pb-5">
        <Typography size="xl" type="primarywhite">
          Wins
        </Typography>
        <ReturnButton onHandle={handleClose} />
      </div>

      <div className="flex flex-col space-y-2.5">
        {data &&
          data.victories.map((item, id) => {
            return (
              <div
                key={id}
                className="flex justify-between bg-white py-4 px-4 rounded-lg"
              >
                <div>
                  <p>{item.track.track_name}</p>
                  <Typography size="sm" type="sub">
                    {moment(item.date).format("ll")}
                  </Typography>
                </div>
                <div className="flex items-center">
                  {item.placement === 1
                    ? "First"
                    : item.placement === 2
                    ? "Second"
                    : item.placement === 3
                    ? "Third"
                    : null}
                </div>
              </div>
            );
          })}
      </div>
    </FullModal>
  );
};

export const DriverListModal = ({ handleClose, content, drivers }) => {
  return (
    <FullModal>
      <div className="flex justify-between">
        <div className="font-bold flex items-center text-white text-2xl space-x-2">
          <span>PRO</span>
          <span>/</span>
          <span className="text-gray-200">AM</span>
        </div>
        <ReturnButton onHandle={handleClose} />
      </div>
      <div className="grid grid-cols-1 my-5 gap-2">
        <DriverListCard drivers={drivers} />
      </div>
    </FullModal>
  );
};

export const DriverNavigation = ({ currentDriver, totalDriver, setPaper }) => {
  return (
    <>
      <div className="z-20 flex justify-between py-4 bg-red-500 w-full">
        <div className="font-bold text-2xl text-gray-100">
          {1 + currentDriver}
          <span className="text-gray-200"> / {totalDriver}</span>
        </div>
        <div
          className="flex items-center bg-white px-3 rounded-lg font-bold text-sm text-gray-800"
          onClick={() => setPaper(true)}
        >
          <DotIcon />
          <span className="mx-1">SEE ALL</span>
        </div>
      </div>
      <div className="absolute left-0 -bottom-0 w-full py-5 px-8 bg-red-500 z-10">
        test
      </div>
    </>
  );
};
