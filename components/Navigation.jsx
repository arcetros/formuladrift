import { ReturnIcon } from "./icons";

export const Return = ({ children, event }) => {
  return (
    <div
      className="relative z-20 flex justify-between text-gray-200 items-center"
      onClick={event}
    >
      <ReturnIcon styles="text-gray-800" />
      {children}
    </div>
  );
};
