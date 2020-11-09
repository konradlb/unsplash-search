import React from "react";
import Modal from "react-modal";

function ImageItem({ image }) {
  const [modalIsOpen, setModalOpen] = React.useState(false);

  const modalCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "8%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div key={image.id} className="grid__item card">
        <div className="card__body">
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
        <div className="card__footer media">
          <img
            src={image.user.profile_image.small}
            alt=""
            className="media__obj"
          />
          <div className="media__body">
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
