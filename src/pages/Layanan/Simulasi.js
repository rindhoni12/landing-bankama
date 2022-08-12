import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { FormSimulasi } from "../../components";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";

const Simulasi = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Simulasi KPR | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#26ac42" img={contactUs} />
      {/* <FormKpr /> */}
      <FormSimulasi />
    </>
  );
};

export default Simulasi;
