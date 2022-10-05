import React from "react";
import { FocusComponentBackground, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import { PengajuanSection } from "../../components/section";
import { produk } from "../../assets";

const PengajuanForm = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location?.pathname}
      />
      <FocusComponentBackground image={produk} />
      <PengajuanSection />
    </>
  );
};

export default PengajuanForm;
