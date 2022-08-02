import React from "react";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import { HubungiSection } from "../../components/section";
import { contactUs } from "../../assets";

const HubungiKami = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Tentang Kami | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#06aed5" img={contactUs} />
      <HubungiSection />
    </>
  );
};

export default HubungiKami;
