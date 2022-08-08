import React from "react";
import { Card, FocusComponentColor, ReactHelmet } from "../../components/atom";
import { BERITA } from "../../config";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";

const Berita = () => {
  const itemBerita = BERITA;
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#f9b418" img={contactUs} />
      <Card itemBerita={itemBerita} text="Lebih Banyak" />
    </>
  );
};

export default Berita;
