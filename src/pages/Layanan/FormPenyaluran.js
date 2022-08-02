import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import { PenyaluranSection } from "../../components/section";
import { contactUs } from "../../assets";

const FormPenyaluran = () => {
  const location = useLocation();
  return (
    <div>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#8a47ff" img={contactUs} />
      <PenyaluranSection />
    </div>
  );
};

export default FormPenyaluran;
