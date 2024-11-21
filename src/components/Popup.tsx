import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IconX } from "@tabler/icons-react";
import { PopupProps } from "src/interfaces";

const Popup = ({ title, images, description, onClose }: PopupProps) => {
  return (
    <div className="mt-[6em] ml-10 mr-5 md:ml-[30%] shadow-lg p-6 items-center justify-center absolute z-10 rounded-xl bg-white max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
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
              className="z-11 rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </Slide>
      <div className="flex mt-3 flex-wrap max-w-full max-h-full">
        <p className="text-justify overflow-y-scroll h-[200px] md:h-[150px] lg:h-[100px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Popup;
