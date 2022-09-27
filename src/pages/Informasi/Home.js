import React from "react";
import { useLocation } from "react-router-dom";
import { BERITA, WORDING } from "../../config";
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
import { visimisi } from "../../assets";

const Home = () => {
  const location = useLocation();
  const dataWording = WORDING;

  const DATAMISI = [
    "Memberikan layanan penyimpanan dana dan pembiayaan berdasarkan prinsip syariah yang lengkap kepada masyarakat",
    "Mensosialisasikan serta menanamkan pola, sistem, dan konsep perbankan syariah dalam perekonomian masyarakat.",
    "Melakukan inovasi produk sesuai dengan kebutuhan dan perkembangan ekonomi masyarakat.",
    "Mengembangkan jaringan layanan kantor di wilayah eks Karesidenan Pati.",
    "Meningkatkan kesejahteraan bagi karyawan, pengurus, dan pemegang saham.",
  ];

  return (
    <>
      <ReactHelmet
        title="Beranda | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <SimpleSlider />
      <Detail
        img={visimisi}
        judul="Visi"
        deskripsi="Menjadi BPR Syariah pilihan masyarakat yang sehat, unggul, dan terpercaya di wilayah eks Karesidenan Pati."
        judulMisi="Misi"
        misi={DATAMISI}
        deskripsiMisi="Menjadi BPR Syariah pilihan masyarakat yang sehat, unggul, dan terpercaya di wilayah eks Karesidenan Pati."
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
