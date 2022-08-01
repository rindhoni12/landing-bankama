import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import imgContact from "../../assets/img/contact-us.png";
import { useLocation } from "react-router-dom";
import { SectionPengajuan } from "../../components/section";

const PengajuanForm = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#f9b418" img={imgContact} />
      <SectionPengajuan />
    </>
  );
};

export default PengajuanForm;
