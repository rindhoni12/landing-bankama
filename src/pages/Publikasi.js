import React from "react";
import { useLocation } from "react-router-dom";
import imgContact from "../assets/img/contact-us.png";
import { FocusComponentColor, ReactHelmet } from "../components/atom";
import { PublikasiSection } from "../components/section";
import { DATA_PUBLIKASI } from "../config/data";

const Publikasi = () => {
  const DataPublikasi = DATA_PUBLIKASI;
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#e9bf45" img={imgContact} />
      <PublikasiSection
        judul="Publikasi"
        link="publikasi"
        DATA_TABS={DataPublikasi}
      />
    </>
  );
};

export default Publikasi;
