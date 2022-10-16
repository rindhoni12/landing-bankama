import React from "react";
import { ReactHelmet } from "../../components";
import { useLocation } from "react-router-dom";
import { simulasi } from "../../assets";
import { SimulasiBankSection } from "../../components/section";
import { FocusComponentBackground } from "../../components/atom";

const SimulasiBank = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Simulasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={simulasi} />
      <SimulasiBankSection />
    </>
  );
};

export default SimulasiBank;
