import React, { useCallback, useEffect, useRef, useState } from "react";
import { GaleryNewSite, GalerySite } from "./GaleryElements";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { HeadingComponent } from "../atom";
import { PHOTOS } from "../../config";
import { FiX } from "react-icons/fi";

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

const GaleryNewSection = () => {
  const [modal, setModal] = useState(false);
  const [temImg, setTemImg] = useState("");
  const modalRefGalery = useRef();
  let dataPhotos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      id: 1,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      id: 2,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      id: 3,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      id: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      id: 5,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      id: 6,
    },
  ];

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

  console.log(dataPhotos);

  return (
    <GaleryNewSite>
      <div className="galeryNew_container">
        <HeadingComponent
          Heading="Simulasi Kredit Standar!"
          Text="Simulasi ini untuk memudahkan calon kreditur mengetahui besaran
            angsuran per-bulan yang harus dibayarkan dan besarannya sudah sesuai
            aturan bunga yang ditetapkan perusahaan per tanggal 01 Januari 2021."
        />
        <div
          onClick={closeModal}
          ref={modalRefGalery}
          className={modal ? "modal open" : "modal"}
        >
          <img src={temImg} alt="judul_images" />
          <FiX onClick={() => setModal(false)} />
        </div>
        <div className="galeryNew_galery">
          {dataPhotos.map((item, i) => {
            return (
              <div key={i} className="pics" onClick={() => getImages(item.src)}>
                <img src={item.src} alt="item_judul" />
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
