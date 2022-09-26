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
      <ReactHelmet
        title="Simulasi Penyimpanan | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      {id === "simulasi" ? (
        <>
          <FocusComponentBackground image={simulasi} />
          <FormSimulasi
            dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
          />
        </>
      ) : id === "simulasi-pembiayaan" ? (
        <>
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
