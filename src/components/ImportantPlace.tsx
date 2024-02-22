import { useState } from "react";
import { ImportantPlaces } from "@constants";
import { motion } from "framer-motion";
import Popup from "@components/Popup";

const ImportantPlace = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedDescription, setSelectedDescription] = useState<string[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  const handleOnClick = (
    title: string,
    images: string[],
    description: string[]
  ) => {
    setSelectedTitle(title);
    setSelectedImages(images);
    setSelectedDescription(description);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="h-screen w-screen relative bg-puri-beach-satellite bg-cover bg-center">
      {ImportantPlaces.map((ImportantPlaces, index) => (
        <motion.div
          key={index}
          className={`absolute ${ImportantPlaces.position} rounded-xl bg-white bg-opacity-50 shadow-lg p-4`}
          initial={ImportantPlaces.intial}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={() =>
            handleOnClick(
              ImportantPlaces.title,
              ImportantPlaces.images,
              ImportantPlaces.description
            )
          }
        >
          <div className="flex items-center ">
            <img
              src={ImportantPlaces.icon}
              alt="icon"
              className="w-10 h-10 mb-2"
            />
            <h2 className="text-lg font-bold mb-2 ml-2">
              {ImportantPlaces.title}
            </h2>
          </div>
        </motion.div>
      ))}
      {isPopupVisible && (
        <Popup
          title={selectedTitle}
          images={selectedImages}
          description={selectedDescription}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ImportantPlace;
