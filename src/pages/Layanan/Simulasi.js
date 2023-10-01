import React from "react";
import { FocusComponentBackground, ReactHelmet } from "../../components/atom";
import { ErrorSection, FormKpr, FormSimulasi } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import { simulasi } from "../../assets";
import { DATAFETCH, WORDING } from "../../config";

const Simulasi = () => {
  const location = useLocation();
  const dataWording = WORDING;
  const { id } = useParams();

  const { data: dataIlustrasi, isloading } = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/ilustrasi"
  );

  const getDataImgTabungan = (dataIlustrasi || []).filter(
    (item) => item.posisi === "tabungan"
  );

  const getDataImgPembiayaan = (dataIlustrasi || []).filter(
    (item) => item.posisi === "pembiayaan"
  );

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
            isloading={isloading}
            img={getDataImgTabungan[0] ?? []}
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
          <FormKpr isloading={isloading} img={getDataImgPembiayaan[0] ?? []} />
        </>
      ) : (
        <ErrorSection />
      )}
    </>
  );
};

export default Simulasi;
