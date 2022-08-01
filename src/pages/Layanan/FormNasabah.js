import React from "react";
import { useLocation } from "react-router-dom";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import imgContact from "../../assets/img/contact-us.png";
import { FormNasabahSection } from "../../components/section";

const FormNasabah = () => {
  const location = useLocation();
  let userState = location;
  if (userState.state === null) {
    window.location.href = "/web-landing";
  } else if (userState.state.state === false) {
    window.location.href = "./pengajuan-rekening";
  }

  return (
    <>
      <ReactHelmet
        title="Berita | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#f9b418" img={imgContact} />
      <FormNasabahSection />
    </>
  );
};

export default FormNasabah;
