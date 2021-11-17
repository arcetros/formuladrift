import moment from "moment";
import { motion } from "framer-motion";
import { Typography } from "../../Typography";
import { dropIn } from "../../animations/";
import Button from "../button/";

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

export const WinsModal = ({ handleClose, data, driver }) => {
  return (
    <FullModal>
      <div className="flex justify-between items-center pb-5">
        <Typography size="xl" type="primarywhite">
          Wins
        </Typography>
        <Button
          onHandle={handleClose}
          type="primarywhite"
          className="flex items-center py-2 px-3"
          icon="ReturnIcon"
        >
          <Typography type="primary" size="lg" styles="mx-2">
            RETURN
          </Typography>
        </Button>
      </div>

      <div className="flex flex-col space-y-2.5">
        {data.victories.length ? (
          data.victories.map((item, id) => {
            return (
              <div
                key={id}
                className="flex justify-between bg-white p-4 rounded-lg"
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
          })
        ) : (
          <div className="p-4 bg-white rounded-lg">
            <div className="flex animate-pulse flex-row items-center h-full justify-between space-x-5">
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
              </div>
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            </div>
          </div>
        )}
      </div>
    </FullModal>
  );
};
