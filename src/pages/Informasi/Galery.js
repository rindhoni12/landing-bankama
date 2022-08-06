import React from "react";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";
import {
  FocusComponentColor,
  // GalerySection,
  ReactHelmet,
} from "../../components";
import { GaleryNewSection } from "../../components/galery";

const Galery = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Galery Photos | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#e9bf45" img={contactUs} />
      {/* <GalerySection /> */}
      <GaleryNewSection />
    </>
  );
};

export default Galery;
