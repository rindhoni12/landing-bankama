import React from "react";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";
import {
  FocusComponentColor,
  PublikasiSection,
  ReactHelmet,
} from "../../components";
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
      <FocusComponentColor
        dataWording={dataWording ? dataWording?.publikasi : ""}
        backgroundColor="#e9bf45"
        img={contactUs}
      />
      <PublikasiSection
        link="publikasi"
        DATA_TABS={DataPublikasi}
        dataWording={dataWording ? dataWording?.publikasi : ""}
      />
    </>
  );
};

export default Publikasi;
