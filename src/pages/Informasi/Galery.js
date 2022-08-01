import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import imgContact from "../../assets/img/contact-us.png";
import { useLocation } from "react-router-dom";
import GalerySection from "../../components/galery";

const Galery = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Galery Photos | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#e9bf45" img={imgContact} />
      <GalerySection />
    </>
  );
};

export default Galery;
