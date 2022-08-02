import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import imgContact from "../../assets/img/contact-us.png";
import { useLocation } from "react-router-dom";
import { PenyaluranSection } from "../../components/section";

const FormPenyaluran = () => {
  const location = useLocation();
  return (
    <div>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#8a47ff" img={imgContact} />
      <PenyaluranSection />
    </div>
  );
};

export default FormPenyaluran;
