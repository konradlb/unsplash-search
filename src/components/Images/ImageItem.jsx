import React from "react";
import Modal from "react-modal";

function ImageItem({ image }) {
  const [modalIsOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div key={image.id} className="gridItem card">
        <div className="cardBody">
          <button onClick={openModal}>
            <img src={image.urls.small} alt="" />
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        //style={modalCustomStyles}
        className="modal"
      >
        <img className="modalImage" src={image.urls.small} alt="" />
        <div className="cardFooter media">
          <img
            src={image.user.profile_image.small}
            alt=""
            className="mediaObject"
          />
          <div className="mediaBody">
            <a href={image.user.portfolio_url} target="_blank" rel="noreferrer">
              {image.user.name}
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ImageItem;
