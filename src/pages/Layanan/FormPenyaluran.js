import React from "react";
import { ReactHelmet } from "../../components/atom";
import { useLocation, useParams } from "react-router-dom";
import { ErrorSection } from "../../components/section";
import Form from "./Form";

const FormPenyaluran = () => {
  const location = useLocation();
  const { id } = useParams();

  let userState = location;
  if (userState.state === null) {
    window.location.href = "/";
  } else if (userState.state.state === false) {
    window.location.href = "./pengajuan-rekening";
  }

  return (
    <div>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      {id === "pembiayaan" ? null : id === "tabungan" ? null : <ErrorSection />}
      <Form id={id} />
    </div>
  );
};

export default FormPenyaluran;
