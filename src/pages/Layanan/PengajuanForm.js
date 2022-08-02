import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import { PengajuanSection } from "../../components/section";
import { contactUs } from "../../assets";

const PengajuanForm = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#f9b418" img={contactUs} />
      <PengajuanSection />
    </>
  );
};

export default PengajuanForm;
