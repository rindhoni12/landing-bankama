import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { FocusComponentBackground, ReactHelmet } from "../../components/atom";
import { LayananSection } from "../../components/section";
import { produk } from "../../assets";
import { Accordion } from "../../components";
import { DATAFETCHPUBLIKASI } from "../../config/data";

const Layanan = () => {
  const { id } = useParams();
  const { index } = useParams();

  const dataProdukLayanan = DATAFETCHPUBLIKASI(
    "https://admin.arthamasabadi.co.id/api/v1/produk-all"
  )?.data;

  const dataArray = dataProdukLayanan?.produk_list
    .map((category) => category.slug)
    .flat();

  const renderedComponents = dataProdukLayanan?.produk_list?.map((data) => {
    const { slug, contentFull } = data;

    const relevantContent = dataArray?.find((content) => content === slug);

    const contentBroo = dataProdukLayanan?.produk_list?.find(
      (content) => content.slug === slug
    );

    if (relevantContent && id === slug) {
      return (
        <LayananSection
          key={data.id}
          judul={data.judul}
          id={data.id}
          index={index}
          link={slug}
          DATA_TABS={contentBroo?.contentFull || contentFull}
        />
      );
    } else {
      return null;
    }
  });

  return <>{renderedComponents}</>;
};

const LayananSatu = () => {
  const location = useLocation();
  let items = {
    tabungan: [
      {
        name: "Tabungan iB Wadiah",
        content:
          "Tabungan iB Wadiah merupakan tabungan yang dikelola dengan sistem titipan (wadiah).",
        url: "layanan-kami/penyimpanan-dana/0",
      },
      {
        name: "Tabungan iB Mudharabah",
        content:
          "Membantu mewujudkan niat anda beribadah haji lebih mudah dan terencana.",
        url: "layanan-kami/penyimpanan-dana/1",
      },
      {
        name: "Deposito iB Mudharabah",
        content:
          "Deposito iB Mudharabah merupakan layanan investasi berjangka yang dikelola dengan sistem bagi hasil (Mudharabah).",
        url: "layanan-kami/penyimpanan-dana/2",
      },
    ],
    pembiayaan: [
      {
        name: "Pembiayaan iB Murabahah",
        content:
          "Pembiayaan iB Murabahah merupakan jenis pembiayaan yang menggunakan prinsip jual beli.",
        url: "layanan-kami/penyaluran-dana/0",
      },
      {
        name: "Pembiayaan iB Musyarakah",
        content:
          "Pembiayaan iB Musyarakah merupakan jenis pembiayaan yang menggunakan prinsip bagi hasil.",
        url: "layanan-kami/penyaluran-dana/1",
      },
      {
        name: "Pembiayaan iB Multijasa",
        content:
          "Pembiayaan iB Multijasa merupakan jenis pembiayaan yang menggunakan akad ijarah.",
        url: "layanan-kami/penyaluran-dana/2",
      },
      {
        name: "iB Gadai Emas",
        content:
          "Pembiayaan iB Gadai Emas merupakan jenis pembiayaan dengan menggunakan prisnsip Qardh, Ijarah dan Rahn.",
        url: "layanan-kami/penyaluran-dana/3",
      },
    ],
  };

  return (
    <>
      <ReactHelmet
        title="Layanan & Produk | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={produk} />
      <Accordion
        items={items?.tabungan}
        judul="Layanan Tabungan Dana"
        desc="Berikut ini adalah Produk dan Layanan dari Penyimpanan Dana (Tabungan)."
      />
      <Accordion
        items={items?.pembiayaan}
        judul="Layanan Pembiayaan Dana"
        desc="Berikut ini adalah Produk dan Layanan dari Penyaluran Dana (Pembiayaan)."
      />
    </>
  );
};

export { Layanan, LayananSatu };
