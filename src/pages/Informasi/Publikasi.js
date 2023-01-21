import React from "react";
import { useLocation } from "react-router-dom";
import { publikasi } from "../../assets";
import { PublikasiSection, ReactHelmet } from "../../components";
import { FocusComponentBackground } from "../../components/atom";
import { WORDING } from "../../config";
import { DATAFETCHPUBLIKASI } from "../../config/data";

const Publikasi = () => {
  const dataPublikasi = DATAFETCHPUBLIKASI(
    "https://admin.arthamasabadi.co.id/api/v1/laporan"
  )?.data;

  const dataPublikasiNew = [
    {
      id: 1,
      judul: dataPublikasi?.judul,
      content: dataPublikasi?.content,
    },
    {
      id: 2,
      judul: dataPublikasi?.judul_2,
      content: {
        fitur: dataPublikasi?.content_2?.fitur_2,
      },
    },
  ];

  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Publikasi | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={publikasi} />
      <PublikasiSection
        link="publikasi"
        DATA_TABS={dataPublikasiNew}
        dataWording={dataWording ? dataWording?.publikasi : ""}
      />
    </>
  );
};

export default Publikasi;
