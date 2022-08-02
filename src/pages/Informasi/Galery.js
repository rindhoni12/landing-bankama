import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import GalerySection from "../../components/galery";
import { contactUs } from "../../assets";

const Galery = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Galery Photos | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#e9bf45" img={contactUs} />
      <GalerySection />
    </>
  );
};

export default Galery;
