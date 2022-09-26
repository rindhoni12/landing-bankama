import React from "react";
import { useLocation } from "react-router-dom";
import { publikasi } from "../../assets";
import { PublikasiSection, ReactHelmet } from "../../components";
import { FocusComponentBackground } from "../../components/atom";
import { DATA_PUBLIKASI, WORDING } from "../../config";

const Publikasi = () => {
  const DataPublikasi = DATA_PUBLIKASI;
  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={publikasi} />
      <PublikasiSection
        link="publikasi"
        DATA_TABS={DataPublikasi}
        dataWording={dataWording ? dataWording?.publikasi : ""}
      />
    </>
  );
};

export default Publikasi;
