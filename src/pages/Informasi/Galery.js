import React from "react";
import { useLocation } from "react-router-dom";
import { contactUs, galeri } from "../../assets";
import {
  FocusComponentColor,
  // GalerySection,
  ReactHelmet,
} from "../../components";
import { FocusComponentBackground } from "../../components/atom";
import { GaleryNewSection } from "../../components/galery";
import { WORDING } from "../../config";

const Galery = () => {
  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Galery Photos | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      {/* <FocusComponentColor
        dataWording={dataWording ? dataWording?.galeri : ""}
        backgroundColor="#e9bf45"
        img={contactUs}
      /> */}
      <FocusComponentBackground image={galeri} />
      {/* <GalerySection /> */}
      <GaleryNewSection dataWording={dataWording ? dataWording?.galeri : ""} />
    </>
  );
};

export default Galery;
