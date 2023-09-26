import DOMPurify from "dompurify";
import React, { useEffect, useRef } from "react";
import { pro_not } from "../../assets";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./ModalElements";

const ModalItem = ({ showModal, setShowModal, id, item }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "";
    }

    if (showModal) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <div className="pembungkus" id={id}>
                <div className="images_content">
                  <div className="circle">
                    <div className="gambar_img">
                      <img
                        src={
                          `https://admin.arthamasabadi.co.id/storage/images/direksis/${item?.photo}`
                            ? `https://admin.arthamasabadi.co.id/storage/images/direksis/${item?.photo}`
                            : pro_not
                        }
                        alt={item?.nama}
                      />
                    </div>
                  </div>
                </div>
                <div className="content_form">
                  <div className="form">
                    <div className="text_form_judul">{item?.nama}</div>
                  </div>
                  <div className="form">
                    <div className="text_form">{item?.jabatan}</div>
                  </div>
                </div>
                <div className="heading">
                  <p>
                    <b>Pendidikan</b> : {item?.pendidikan_terakhir}
                  </p>
                  <br></br>
                  <p>
                    <b>Pengalaman Kerja</b> : {item?.pekerjaan_terakhir}
                  </p>
                  <br></br>
                  <p>
                    <b>Dasar Pengangkatan</b> : {item?.dasar_pengangkatan}
                  </p>
                  <br></br>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item?.desc),
                    }}
                  /> */}
                </div>
              </div>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default ModalItem;
