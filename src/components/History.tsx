import { useState } from "react";
import { history } from "@constants";
import { motion } from "framer-motion";
import Popup from "@components/Popup";

const History = () => {
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
    <div className="h-screen w-screen relative bg-puri-beach bg-cover bg-center">
      {history.map((history, index) => (
        <motion.div
          key={index}
          className={`absolute ${history.position} rounded-xl bg-white bg-opacity-50 shadow-lg p-4 md:w-1/2`}
          initial={history.intial}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={() =>
            handleOnClick(
              history.title,
              history.images,
              history.mainDescription
            )
          }
        >
          <div className="flex items-center">
            <img src={history.icon} alt="icon" className="w-6 h-6 mb-2" />
            <h2 className="text-lg font-bold mb-2 ml-2">{history.title}</h2>
          </div>
          <p className="text-xs">{history.description}</p>
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

export default History;
