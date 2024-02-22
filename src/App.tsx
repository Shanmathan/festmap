import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "@components/Navbar";
import FacilitiesContainer from "@components/FactilitiesContainer";
import FacilitiesMap from "@components/FacilitiesMap";
import NearbySpots from "./components/NearbySpots";
import Slideshow from "./components/Slideshow";
import { Element } from "react-scroll";

function App() {
  const [name, setname] = useState("");
  const handleData = (data: string) => {
    setname(data);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Element name='home'>
        <Slideshow />
      </Element>
      <Element name='nearbyTouristSpots'>
        <NearbySpots />
      </Element>
      <Element name='facilities'>
        <FacilitiesContainer setName={handleData} />
        <FacilitiesMap name={name} />
      </Element>
    </BrowserRouter>
  );
}

export default App;
