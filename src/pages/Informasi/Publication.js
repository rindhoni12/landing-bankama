import React from "react";
import { useLocation } from "react-router-dom";
import { publikasi } from "../../assets";
import { PublikasiSection, ReactHelmet } from "../../components";
import { FocusComponentBackground } from "../../components/atom";
import { WORDING } from "../../config";
import { DATAFETCHPUBLIKASI } from "../../config/Data";

const Publication = () => {
  const dataPublikasi = DATAFETCHPUBLIKASI(
    "https://admin.arthamasabadi.co.id/api/v2/publikasi"
  )?.data?.data;

  const dataPublication = dataPublikasi
    ? Object.entries(dataPublikasi).map(([kategori, items], index) => ({
        id: index + 1,
        judul: kategori,
        content: {
          fitur: Array.isArray(items)
            ? items.map((item) => ({
                id: item.id,
                judul: item.judul_laporan,
                tanggal: item.tahun_laporan,
                pdfpath: item.pdf_url,
                file: `https://admin.arthamasabadi.co.id/storage/files/publikasis/${item.pdf_url}`,
              }))
            : [],
        },
      }))
    : [];

  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Publication | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={publikasi} />
      <PublikasiSection
        link="publication"
        DATA_TABS={dataPublication}
        dataWording={dataWording ? dataWording?.publication : ""}
      />
    </>
  );
};

export default Publication;
