import React, { useCallback, useEffect, useRef, useState } from "react";
import { GaleryNewSite, GalerySite } from "./GaleryElements";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { HeadingComponent } from "../atom";
import { DATAFETCH, PHOTOS } from "../../config";
import { FiX } from "react-icons/fi";
import { DATAFETCHVIDEO } from "../../config/Data";

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

const GaleryNewSection = ({ dataWording }) => {
  const [modal, setModal] = useState(false);
  const [temImg, setTemImg] = useState("");
  const modalRefGalery = useRef();
  const dataGambar = DATAFETCH(
    "https://admin.arthamasabadi.co.id/api/v1/galeri"
  )?.data;

  const dataVideo = DATAFETCHVIDEO(
    "https://admin.arthamasabadi.co.id/api/v1/galeri"
  )?.data;

  const getImages = (item) => {
    setTemImg(item);
    setModal(true);
  };

  const closeModal = (e) => {
    if (modalRefGalery.current === e.target) {
      setModal(false);
    }
  };

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "";
    }

    if (modal) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [modal]);

  return (
    <GaleryNewSite>
      <div className="galeryNew_container">
        <HeadingComponent
          Heading={dataWording ? dataWording[1]?.text : ""}
          Text={dataWording ? dataWording[1]?.desc : ""}
        />
        <div className="galeryNew_video" style={{ marginBottom: "40px" }}>
          <div className="video">
            <iframe
              src={dataVideo ? dataVideo : ""}
              frameBorder="0"
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="galeryNew_container">
        <HeadingComponent
          Heading={dataWording ? dataWording[2]?.text : ""}
          Text={dataWording ? dataWording[2]?.desc : ""}
        />
        <div
          onClick={closeModal}
          ref={modalRefGalery}
          className={modal ? "modal open" : "modal"}
        >
          <img
            src={`https://admin.arthamasabadi.co.id/storage/images/galeris/${temImg}`}
            alt="judul_images"
          />
          <FiX onClick={() => setModal(false)} />
        </div>
        <div className="galeryNew_galery">
          {dataGambar?.map((item, i) => {
            return (
              <div
                key={i}
                className="pics"
                onClick={() => getImages(item?.photo)}
              >
                <img
                  src={`https://admin.arthamasabadi.co.id/storage/images/galeris/${item?.photo}`}
                  alt="item_judul"
                />
              </div>
            );
          })}
        </div>
      </div>
    </GaleryNewSite>
  );
};

export default GalerySection;
export { GaleryNewSection };
