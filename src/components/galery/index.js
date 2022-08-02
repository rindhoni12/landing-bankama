import React, { useCallback, useState } from "react";
import { GalerySite } from "./GaleryElements";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { PHOTOS } from "../../config/data";
import { HeadingComponent } from "../atom";

const GalerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <GalerySite>
      <div id="galery" className="galery_container">
        <HeadingComponent
          Heading="Simulasi Kredit Standar!"
          Text="Simulasi ini untuk memudahkan calon kreditur mengetahui besaran
            angsuran per-bulan yang harus dibayarkan dan besarannya sudah sesuai
            aturan bunga yang ditetapkan perusahaan per tanggal 01 Januari 2021."
        />
        {PHOTOS ? (
          <Gallery photos={PHOTOS} onClick={openLightbox} />
        ) : (
          "Loading"
        )}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={PHOTOS.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </GalerySite>
  );
};

export default GalerySection;
