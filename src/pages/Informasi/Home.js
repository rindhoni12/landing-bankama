import React from "react";
// import { Accordion } from "../components";
import { useLocation } from "react-router-dom";
import { BERITA } from "../../config";
import {
  CardInformasiSection,
  FocusComponentWithLogo,
  SimpleSliderFicture,
  SimpleSlider,
  OjkInformasi,
  ReactHelmet,
  Informasi,
  Detail,
  Card,
} from "../../components";

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
      <CardInformasiSection />
      <FocusComponentWithLogo backgroundColor="#06aed5" />
      <Card itemBerita={BERITA} text="Lihat Lebih" />
      <Informasi />

      {/* <Accordion /> */}
    </>
  );
};

export default Home;
