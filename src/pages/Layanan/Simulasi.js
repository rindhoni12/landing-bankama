import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { FormSimulasi } from "../../components";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";
import { WORDING } from "../../config";

const Simulasi = () => {
  const location = useLocation();
  const dataWording = WORDING;

  return (
    <>
      <ReactHelmet
        title="Simulasi KPR | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor
        dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
        backgroundColor="#26ac42"
        img={contactUs}
      />
      {/* <FormKpr /> */}
      <FormSimulasi
        dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
      />
    </>
  );
};

export default Simulasi;
