import React from "react";
import { useLocation } from "react-router-dom";
import { BERITA, DATAFETCH, WORDING } from "../../config";
import {
  CardInformasiSection,
  FocusComponentWithLogo,
  // SimpleSliderFicture,
  SimpleSlider,
  OjkInformasi,
  ReactHelmet,
  Informasi,
  Detail,
  Card,
} from "../../components";

const Home = () => {
  const location = useLocation();
  const dataWording = WORDING;

  const VISIMISI = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/visimisi"
  )?.data;

  const { data: dataIlustrasi, isloading } = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/ilustrasi"
  );

  const getDataImgHome = (dataIlustrasi || []).filter(
    (item) => item.posisi === "home"
  );

  return (
    <>
      <ReactHelmet
        title="Beranda | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <SimpleSlider />
      <Detail
        isloading={isloading}
        img={getDataImgHome[0]?.banner}
        judul="Visi"
        deskripsi={VISIMISI?.visi}
        judulMisi="Misi"
        misi={VISIMISI?.misi}
      />
      <OjkInformasi dataWording={dataWording ? dataWording?.home : ""} />
      {/* <SimpleSliderFicture dataWording={dataWording ? dataWording?.home : ""} /> */}
      <CardInformasiSection
        dataWording={dataWording ? dataWording?.home : ""}
      />
      <FocusComponentWithLogo
        dataWording={dataWording ? dataWording?.simulasi_kredit : ""}
        backgroundColor="#06aed5"
      />
      <Card
        itemBerita={BERITA}
        text="Lihat Lebih"
        dataWording={dataWording ? dataWording?.berita_kami : ""}
      />
      <Informasi dataWording={dataWording ? dataWording?.home : ""} />
    </>
  );
};

export default Home;
