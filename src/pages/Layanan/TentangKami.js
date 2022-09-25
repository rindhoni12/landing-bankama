import React from "react";
import {
  Detail,
  FocusComponentBackground,
  ReactHelmet,
} from "../../components/atom";
import { SimpleSliderFicture } from "../../components/carousel";
import { useLocation } from "react-router-dom";
import { ttg_kami, visimisi } from "../../assets";
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
      <FocusComponentBackground image={ttg_kami} />
      <Detail
        img={visimisi}
        judul="BPR Syariah Artha Mas Abadi"
        deskripsi="<div>BPR Syariah Artha Mas Abadi merupakan salah satu unit usaha Pesantren Maslakul Huda yang didirikan oleh KH. MASahal Mahfudh (almarhum). Sistem Keuangan Syari’ah dilingkungan Pesantren Maslakul Huda dirintis melalui Unit SimpanPinjam Syariah (USPS) Koperasi Eka Serba Abadi Pesantren Maslakul Huda sejak Februari 2002. Empat tahun kemudian tepatnya pada tanggal 28 Juni 2006, Unit Simpan Pinjam Syariah (USPS) berubah menjadi PT. BPR Syari’ah Artha Mas Abadi yang telah mendapat izin operasional dari Bank Indonesia.<br><br>Pesantren Maslakul Huda memperoleh ijin prinsip untuk mendirikan bank syariah pada 14 November 2005 (Keputusan Direktorat Perbankan Syariah Bank Indonesia Nomor 7/1776/DPbS) disusul penerbitan ijin usaha pada 01 Juni 2006 (Surat Keputusan Gubernur Bank Indonesia Nomor 08/46/KEP. GBI/2006), dan membuka diri melayani masyarakat umum sejak tanggal 28 Juni 2006.<br><br>Letak Geografis PT. BPR Syari’ah Artha Mas Abadi di Jl. Raya Pati-Tayu Km. 19 Waturoyo Margoyoso Pati.</div>"
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
