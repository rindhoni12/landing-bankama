import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { FocusComponentBackground, ReactHelmet } from "../../components/atom";
import { LayananSection } from "../../components/section";
import { produk } from "../../assets";
import { Accordion } from "../../components";
import { DATAFETCHPUBLIKASI } from "../../config/Data";

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
  const dataProdukLayanan = DATAFETCHPUBLIKASI(
    "https://admin.arthamasabadi.co.id/api/v1/produk-all"
  )?.data;
  const convertedData = convertDataToArray(dataProdukLayanan?.produk_list);

  return (
    <>
      <ReactHelmet
        title="Layanan & Produk | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={produk} />
      {Array.isArray(convertedData) && // Check if dataProduk is an array
        Object.values(convertedData)?.map((category, i) => {
          return (
            <Accordion
              key={i}
              items={category?.dataObject}
              judul={category?.name}
              desc={category?.name}
            />
          );
        })}
    </>
  );
};

const convertDataToArray = (data) => {
  console.log(data);
  const result = [];

  data?.forEach((category) => {
    const categoryObject = {
      name: category.judul,
      dataObject: category.contentFull.map((item) => ({
        judul: item.nama_produklayanan,
        to: `/${item.jenis_tabungan}/${item.id}`,
        deskripsi: item.deskripsi,
      })),
    };
    result.push(categoryObject);
  });

  return result;
};

export { Layanan, LayananSatu };
