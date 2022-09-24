import React from "react";
import { ReactHelmet } from "../../components/atom";
import { useLocation, useParams } from "react-router-dom";
import { ErrorSection } from "../../components/section";
// import { contactUs } from "../../assets";
import Form from "./Form";

const FormPenyaluran = () => {
  const location = useLocation();
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      {/* <FocusComponentColor backgroundColor="#8a47ff" img={contactUs} /> */}
      {id === "pembiayaan" ? null : id === "tabungan" ? null : <ErrorSection />}
      <Form id={id} />
    </div>
  );
};

export default FormPenyaluran;
