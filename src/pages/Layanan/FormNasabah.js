import React from "react";
import { useLocation } from "react-router-dom";

const FormNasabah = () => {
  const location = useLocation();
  let userState = location;
  if (userState.state === null) {
    window.location.href = "/web-landing";
  } else if (userState.state.state === false) {
    window.location.href = "./pengajuan-rekening";
  }

  return <div>Form Pengajuan</div>;
};

export default FormNasabah;
