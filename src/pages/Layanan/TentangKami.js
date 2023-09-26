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
import { DATAFETCH, WORDING } from "../../config";

const TentangKami = () => {
  const location = useLocation();
  const dataWording = WORDING;

  const TENTANGKAMI = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/tentangkami"
  )?.data;

  return (
    <>
      <ReactHelmet
        title="Tentang Kami | Bank Artha Mas Abadi"
        url={location.pathname}
      />
      <FocusComponentBackground image={ttg_kami} />
      <Detail
        img={visimisi}
        judul={TENTANGKAMI?.judul ? TENTANGKAMI?.judul : ""}
        deskripsi={TENTANGKAMI?.deskripsi ? TENTANGKAMI?.deskripsi : ""}
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
