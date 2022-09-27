import React from "react";
import { FocusComponentBackground, ReactHelmet } from "../../components/atom";
import { ErrorSection, FormKpr, FormSimulasi } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import { simulasi } from "../../assets";
import { WORDING } from "../../config";

const Simulasi = () => {
  const location = useLocation();
  const dataWording = WORDING;
  const { id } = useParams();
  console.log(id);
  return (
    <>
      {id === "simulasi" ? (
        <>
          <ReactHelmet
            title="Simulasi Tabungan | Bank Artha Mas Abadi"
            url={location.pathname}
          />
          <FocusComponentBackground image={simulasi} />
          <FormSimulasi
            dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
          />
        </>
      ) : id === "simulasi-pembiayaan" ? (
        <>
          <ReactHelmet
            title="Simulasi Pembiayaan | Bank Artha Mas Abadi"
            url={location.pathname}
          />
          <FocusComponentBackground image={simulasi} />
          <FormKpr />
        </>
      ) : (
        <ErrorSection />
      )}
    </>
  );
};

export default Simulasi;
