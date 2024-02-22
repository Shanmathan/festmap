import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IconX } from "@tabler/icons-react";
import { PopupProps } from "src/interfaces";

const Popup = ({ title, images, description, onClose }: PopupProps) => {
  return (
    <div className="mt-[6em] ml-10 mr-5 shadow-lg p-6  absolute z-10 rounded-xl bg-white max-w-[80%]">
      <div className="flex justify-end">
        <IconX size={32} onClick={onClose} />
      </div>
      <h1 className="m-5 text-center font-bold text-lg">{title}</h1>
      <Slide
        duration={5000}
        transitionDuration={1000}
        autoplay={true}
        infinite={true}
        canSwipe={true}
        indicators={false}
        arrows={true}
      >
        {images.map((each, index) => (
          <div key={index}>
            <img
              src={each}
              alt="slide-img"
              className=" z-11 rounded-lg w-[100%] h-[100%] "
            />
          </div>
        ))}
      </Slide>
      <div className="flex mt-3 flex-wrap max-w-[100%] max-h-[100%]">
        <p className="text-justify overflow-y-scroll h-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Popup;
