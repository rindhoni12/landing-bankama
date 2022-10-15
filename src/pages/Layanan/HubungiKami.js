import React from "react";
import { FocusComponentBackground, ReactHelmet } from "../../components/atom";
import { useLocation } from "react-router-dom";
import { HubungiSection } from "../../components/section";
import { form_p } from "../../assets";

const HubungiKami = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Tentang Kami | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={form_p} />
      <HubungiSection />
    </>
  );
};

export default HubungiKami;
