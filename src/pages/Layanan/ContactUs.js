import React from "react";
import {
  Detail,
  FocusComponentColor,
  ReactHelmet,
} from "../../components/atom";
import { SimpleSliderFicture } from "../../components/carousel";
import { OrganisasiSection, TentangKami } from "../../components/section";
import { useLocation } from "react-router-dom";
import { contactUs } from "../../assets";

const ContactUs = () => {
  const location = useLocation();
  return (
    <>
      <ReactHelmet
        title="Tentang Kami | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentColor backgroundColor="#06aed5" img={contactUs} />
      <Detail
        judul="Koperasi BPR Wedarijaksa"
        deskripsi="Koperasi BPR Wedarijaksa Kabupaten Pati (KBPR Wedarijaksa) berlokasi di Jalan Raya Juana-Tayu Km.7, Guyangan Kecamatan Trangkil Kabupaten Pati. Didirikan berdasarkan Surat Pengurus Koperasi BPR Wedarijaksa No: 21/KBPR/IV/1990 tanggal 2 April 1990 dan No : 24/KBPR/VI/1990 tanggal 18 Juni 1990 perihal permohonan izin usaha Koperasi BPR Wedarijaksa di Kecamatan Wedarijaksa, Kabupaten Pati, Jawa Tengah dan dengan surat Menteri Keuangan No. S-944/MK.13/1989 tanggal 9 Agustus 1989"
      />
      <SimpleSliderFicture
        judul="Foto dan Informasi Tentang Kami"
        deskripsi="Koperasi BPR Wedarijaksa Kabupaten Pati (KBPR Wedarijaksa) berlokasi"
      />
      <OrganisasiSection />
      <TentangKami />
    </>
  );
};

export default ContactUs;
