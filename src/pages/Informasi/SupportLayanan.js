import React from "react";
import { useParams } from "react-router-dom";
import { ErrorSection } from "../../components";
import { DetailSupportComponents } from "../../components/detailberita";
import { DATA_FOOTER } from "../../config";

const SupportLayanan = () => {
  const { id } = useParams();

  switch (id) {
    case "syarat-ketentuan":
      return (
        <DetailSupportComponents
          id={id}
          itemNew={DATA_FOOTER.syarat_ketentuan[0]}
        />
      );
    case "kebijakan-privasi":
      return (
        <DetailSupportComponents
          id={id}
          itemNew={DATA_FOOTER.kebijakan_privasi[0]}
        />
      );
    case "prosedur-pengaduan":
      return (
        <DetailSupportComponents
          id={id}
          itemNew={DATA_FOOTER.prosedur_pengaduan[0]}
        />
      );
    default:
      return <ErrorSection />;
  }
};

export default SupportLayanan;
