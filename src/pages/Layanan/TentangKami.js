import React from "react";
import {
  Detail,
  FocusComponentColor,
  ReactHelmet,
} from "../../components/atom";
import { SimpleSliderFicture } from "../../components/carousel";
import { useLocation } from "react-router-dom";
import { contactUs, visimisi } from "../../assets";
import { KontakKamiSection, OrganisasiSection } from "../../components";
import { WORDING } from "../../config";

const TentangKami = () => {
  const location = useLocation();
  const dataWording = WORDING;
  return (
    <>
      <ReactHelmet
        title="Tentang Kami | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor
        dataWording={dataWording ? dataWording?.tentang_kami : ""}
        backgroundColor="#06aed5"
        img={contactUs}
      />
      <Detail
        img={visimisi}
        judul="Koperasi BPR Wedarijaksa"
        deskripsi="Koperasi BPR Wedarijaksa Kabupaten Pati (KBPR Wedarijaksa) berlokasi di Jalan Raya Juana-Tayu Km.7, Guyangan Kecamatan Trangkil Kabupaten Pati. Didirikan berdasarkan Surat Pengurus Koperasi BPR Wedarijaksa No: 21/KBPR/IV/1990 tanggal 2 April 1990 dan No : 24/KBPR/VI/1990 tanggal 18 Juni 1990 perihal permohonan izin usaha Koperasi BPR Wedarijaksa di Kecamatan Wedarijaksa, Kabupaten Pati, Jawa Tengah dan dengan surat Menteri Keuangan No. S-944/MK.13/1989 tanggal 9 Agustus 1989"
      />
      <SimpleSliderFicture
        dataWording={dataWording ? dataWording?.tentang_kami : ""}
      />
      <OrganisasiSection
        dataWording={dataWording ? dataWording?.tentang_kami : ""}
      />
      <KontakKamiSection
        dataWording={dataWording ? dataWording?.tentang_kami : ""}
      />
    </>
  );
};

export default TentangKami;
