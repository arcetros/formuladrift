import { ReturnIcon } from "./icons";

export const ReturnButton = ({ onHandle }) => {
  return (
    <div
      className="flex items-center bg-white py-2 px-3 rounded-lg"
      onClick={onHandle}
    >
      <ReturnIcon />
      <p className="font-bold text-gray-800 mx-2">RETURN</p>
    </div>
  );
};
