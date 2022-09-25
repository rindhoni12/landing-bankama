import React from "react";
import {
  FocusComponentBackground,
  FocusComponentColor,
  ReactHelmet,
} from "../../components/atom";
import { FormKpr, FormSimulasi } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import { contactUs, simulasi } from "../../assets";
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
          {/* <FocusComponentColor
            dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
            backgroundColor="#26ac42"
            img={contactUs}
          /> */}
          <FocusComponentBackground image={simulasi} />
          <FormSimulasi
            dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
          />
        </>
      ) : id === "simulasi-kredit" ? (
        <>
          {/* <FocusComponentColor
            dataWording={dataWording ? dataWording?.simulasi_tabungan : ""}
            backgroundColor="#26ac42"
            img={contactUs}
          /> */}
          <FocusComponentBackground image={simulasi} />
          <FormKpr />
        </>
      ) : (
        <div className="text">Tidak Terdapat Form</div>
      )}
    </>
  );
};

export default Simulasi;
