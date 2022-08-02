import React from "react";
import { useLocation } from "react-router-dom";
import { FocusComponentColor, ReactHelmet } from "../../components/atom";
import { contactUs } from "../../assets";
import { FormNasabahSection } from "../../components";

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
      <FocusComponentColor backgroundColor="#f9b418" img={contactUs} />
      <FormNasabahSection />
    </>
  );
};

export default FormNasabah;
