import React from "react";
import SimpleSlider, { SimpleSliderFicture } from "../../components/carousel";
// import { Accordion, FormKpr } from "../components";
import { BERITA } from "../../config/data";
import {
  Card,
  Detail,
  FocusComponent,
  Informasi,
  OjkInformasi,
  ReactHelmet,
} from "../../components/atom";
// import { OrganisasiSection } from "../components/section";
import { useLocation } from "react-router-dom";
import { CardInformasi } from "../../components/section";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Beranda | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <SimpleSlider />
      <Detail
        judul="Visi"
        deskripsi="Menjadi BPR yang kuat, dipercaya dan selalu dihati masyarakat di
                seluruh wilayah kerja Kabupaten Pati dan sekitarnya."
      />
      <OjkInformasi />
      <SimpleSliderFicture
        judul="Produk dan Layanan Kami"
        deskripsi="Kami percaya bahwa pengalaman transaksi perbankan yang pada produk unggulan kami."
      />
      <CardInformasi />
      <FocusComponent backgroundColor="#06aed5" />
      {/* <Accordion /> */}
      <Card itemBerita={BERITA} text="Lihat Lebih" />
      {/* <OrganisasiSection /> */}
      {/* <FormKpr /> */}
      <Informasi />
    </>
  );
};

export default Home;
