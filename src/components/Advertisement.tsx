import { useState } from "react";
import { Advertisement } from "@constants";
import { motion } from "framer-motion";
import LinkPopup from "@components/LinkPopup";

const AdvertisementPanel = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  const handleOnClick = (title: string) => {
    setSelectedTitle(title);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="h-screen w-screen relative bg-puri-beach bg-cover bg-center">
      {Advertisement.map((Advertisement, index) => (
        <motion.div
          key={index}
          className={`absolute ${Advertisement.position} rounded-xl bg-white bg-opacity-50 shadow-lg p-4`}
          initial={Advertisement.intial}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={() => handleOnClick(Advertisement.title)}
        >
          <h2 className="text-lg font-bold mb-2 ml-2 text-center">
            {Advertisement.title}
          </h2>
          <p className="text-xs">{Advertisement.Links}</p>
        </motion.div>
      ))}
      {isPopupVisible && (
        <LinkPopup title={selectedTitle} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default AdvertisementPanel;
