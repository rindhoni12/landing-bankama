import React, { useEffect, useRef } from "react";
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
                <div className="heading">
                  <div className="judul">Create Project</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate laborum perferendis sapiente, excepturi nostrum
                    debitis blanditiis iste, corporis, laudantium dolore
                  </p>
                </div>
                <div className="content_form">
                  <div className="form">
                    <div className="text_form">{item.jabatan}</div>
                  </div>
                  <div className="form">
                    <div className="text_form">{item.id}</div>
                  </div>
                  <div className="form">
                    <div className="text_form">Caption</div>
                  </div>
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
