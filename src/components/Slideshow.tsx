import { useState } from "react";
import { motion } from "framer-motion";
import { Slide } from "react-slideshow-image";
import History from "@components/History";
import ImportantPlaces from "@components/ImportantPlace";

const Slideshow = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const properties = {
    duration: 15000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false,
    autoplay: !isPaused,
    onChange: (oldIndex: number, newIndex: number) => {
      console.log(oldIndex);
      setCurrentSlide(newIndex);
    },
  };

  const SlideshowComponents = [<History />, <ImportantPlaces />];

  return (
    <div onClick={() => setIsPaused(!isPaused)}>
      <Slide {...properties}>
        {SlideshowComponents.map((each, index) => (
          <motion.div key={`${index}-${currentSlide}`} className="">
            {each}
          </motion.div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
