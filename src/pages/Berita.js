import React from "react";
import { Card, FocusComponentColor, ReactHelmet } from "../components/atom";
import { BERITA } from "../config";
import imgContact from "../assets/img/contact-us.png";
import { useLocation } from "react-router-dom";

const Berita = () => {
  const itemBerita = BERITA;
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#f9b418" img={imgContact} />
      <Card itemBerita={itemBerita} text="Load More" />
    </>
  );
};

export default Berita;
