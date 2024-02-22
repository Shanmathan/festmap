import "react-slideshow-image/dist/styles.css";
import { IconX } from "@tabler/icons-react";
import { LinkPopupProps } from "src/interfaces";

const LinkPopup = ({ title, onClose }: LinkPopupProps) => {
  return (
    <div className="mt-[6em] ml-10 mr-5 shadow-lg p-6  absolute z-10 rounded-xl bg-white max-w-[80%]">
      <div className="flex justify-end">
        <IconX size={32} onClick={onClose} />
      </div>
      <h1 className="m-5 text-center font-bold text-lg">{title}</h1>
      <div className="flex mt-3 flex-wrap max-w-[100%] max-h-[100%]">
        <p className="text-justify overflow-y-scroll h-[200px]"></p>
      </div>
    </div>
  );
};

export default LinkPopup;
