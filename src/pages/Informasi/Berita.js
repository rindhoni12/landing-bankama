import React from "react";
import { Card, FocusComponentColor, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";
import { WORDING } from "../../config";

const Berita = () => {
  const location = useLocation();
  const dataWording = WORDING;

  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor
        dataWording={dataWording ? dataWording?.berita_kami : ""}
        backgroundColor="#f9b418"
        img={contactUs}
      />
      <Card
        text="Lebih Banyak"
        dataWording={dataWording ? dataWording?.berita_kami : ""}
      />
    </>
  );
};

export default Berita;
