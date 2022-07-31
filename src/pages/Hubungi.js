import React from "react";
import { FocusComponentColor, ReactHelmet } from "../components/atom";
import imgContact from "../assets/img/contact-us.png";
import { useLocation } from "react-router-dom";
import { HubungiSection } from "../components/section";

const HubungiKami = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Tentang Kami | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#06aed5" img={imgContact} />
      <HubungiSection />
    </>
  );
};

export default HubungiKami;
