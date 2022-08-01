import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  DetailLayananPages,
  FocusComponentContactUs,
  ReactHelmet,
} from "../../components/atom";
import { LayananSection } from "../../components/section";
import imgContact from "../../assets/img/contact-us.png";
import imgDetail from "../../assets/img/2.png";
import { FaAccusoft } from "react-icons/fa";
import { DATA_BARU } from "../../config";

const Layanan = () => {
  const { id } = useParams();
  const { index } = useParams();
  const penyimpanan_dana = DATA_BARU.penyimpanan_dana[0];
  const penyaluran_dana = DATA_BARU.penyaluran_dana[0];
  return (
    <>
      {id === "penyimpanan-dana" ? (
        <LayananSection
          judul="Penyimpanan Dana"
          id={index}
          link={id}
          DATA_TABS={penyimpanan_dana}
        />
      ) : id === "penyaluran-dana" ? (
        <LayananSection
          judul="Penyaluran Dana"
          id={index}
          link={id}
          DATA_TABS={penyaluran_dana}
        />
      ) : (
        ""
      )}
    </>
  );
};

const LayananSatu = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Layanan & Produk | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentContactUs img={imgContact} />
      <DetailLayananPages
        imgDetail={imgDetail}
        label="Penyimpanan Dana"
        to="layanan-kami/penyimpanan-dana/0"
        icon={FaAccusoft}
      />
      <DetailLayananPages
        imgDetail={imgDetail}
        label="Penyaluran Dana"
        to="layanan-kami/penyaluran-dana/0"
        icon={FaAccusoft}
      />
    </>
  );
};

export { Layanan, LayananSatu };
