import React from "react";
import {
  Card,
  FocusComponentBackground,
  ReactHelmet,
} from "../../components/atom";
import { useLocation } from "react-router-dom";
import { berita } from "../../assets";
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
      <FocusComponentBackground image={berita} />
      <Card
        text="Lebih Banyak"
        dataWording={dataWording ? dataWording?.berita_kami : ""}
      />
    </>
  );
};

export default Berita;
