import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components";
import { useLocation } from "react-router-dom";
import { contactUs, simulasi } from "../../assets";
import { WORDING } from "../../config";
import { SimulasiBankSection } from "../../components/section";
import { FocusComponentBackground } from "../../components/atom";

const SimulasiBank = () => {
  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Beranda | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      {/* <FocusComponentColor
        dataWording={dataWording ? dataWording?.publikasi : ""}
        backgroundColor="#e9bf45"
        img={contactUs}
      /> */}
      <FocusComponentBackground image={simulasi} />
      <SimulasiBankSection />
    </>
  );
};

export default SimulasiBank;
