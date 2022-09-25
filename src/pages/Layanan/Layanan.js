import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  DetailLayananPages,
  FocusComponentBackground,
  FocusComponentColor,
  ReactHelmet,
} from "../../components/atom";
import { LayananSection } from "../../components/section";
import { FaAccusoft } from "react-icons/fa";
import { DATA_BARU, WORDING } from "../../config";
import { contactUs, publikasi, two } from "../../assets";

const Layanan = () => {
  const { id } = useParams();
  const { index } = useParams();
  const penyimpanan_dana = DATA_BARU.penyimpanan_dana[0];
  const penyaluran_dana = DATA_BARU.penyaluran_dana[0];
  const penyimpanan_dana_mudharabah = DATA_BARU.penyimpanan_dana_mudharabah[0];
  const deposito_dana_mudharabah = DATA_BARU.deposito_dana_mudharabah[0];
  return (
    <>
      {id === "penyimpanan-dana" ? (
        <LayananSection
          judul="Penyimpanan Dana"
          id={index}
          link={id}
          DATA_TABS={penyimpanan_dana}
          DATA_TABS_BARU={penyimpanan_dana_mudharabah}
          DATA_TABS_DEP={deposito_dana_mudharabah}
        />
      ) : id === "penyaluran-dana" ? (
        <LayananSection
          judul="Penyaluran Dana"
          id={index}
          link={id}
          DATA_TABS={penyaluran_dana}
          DATA_TABS_BARU=""
          DATA_TABS_DEP=""
        />
      ) : (
        ""
      )}
    </>
  );
};

const LayananSatu = () => {
  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Layanan & Produk | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      {/* <FocusComponentColor
        dataWording={dataWording ? dataWording?.produk_layanan : ""}
        backgroundColor="#f9b418"
        img={contactUs}
      /> */}
      <FocusComponentBackground image={publikasi} />
      <DetailLayananPages
        imgDetail={two}
        label="Penyimpanan Dana"
        to="layanan-kami/penyimpanan-dana/0"
        icon={FaAccusoft}
      />
      <DetailLayananPages
        imgDetail={two}
        label="Penyaluran Dana"
        to="layanan-kami/penyaluran-dana/0"
        icon={FaAccusoft}
      />
    </>
  );
};

export { Layanan, LayananSatu };
