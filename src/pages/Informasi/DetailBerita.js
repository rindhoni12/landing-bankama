import React from "react";
import { useParams } from "react-router-dom";
import { DetailBeritaComponents } from "../../components";
import { DATAFETCH } from "../../config";

const DetailBerita = () => {
  const { id } = useParams();

  const DATABERITA = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/posts"
  );

  if (DATABERITA?.data) {
    const activeServiceList = DATABERITA?.data.filter((item) => {
      return id.includes(item.slug);
    });

    return (
      <DetailBeritaComponents
        loading={DATABERITA.isloading}
        item={id}
        newItem={activeServiceList}
      />
    );
  }
};

export default DetailBerita;
