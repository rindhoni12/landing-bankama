import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import imgContact from "../../assets/img/contact-us.png";
import { FormKpr } from "../../components";
import { useLocation } from "react-router-dom";

const Simulasi = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Simulasi KPR | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#26ac42" img={imgContact} />
      <FormKpr />
    </>
  );
};

export default Simulasi;
