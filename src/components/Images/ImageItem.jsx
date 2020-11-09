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

  const location = image.user.location && (
    <div className="userLocation">
      <span>{image.user.location}</span>
    </div>
  );

  return (
    <>
      <div key={image.id} className="gridItem card">
        <div className="cardBody">
          <button onClick={openModal}>
            <img src={image.urls.small} alt="" />
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <img className="modalImage" src={image.urls.small} alt="" />
        <div className="cardFooter">
          <div className="user">
            <img
              src={image.user.profile_image.small}
              alt=""
              className="userAvatar"
            />
            <div className="userLink">
              <a
                href={image.user.portfolio_url}
                target="_blank"
                rel="noreferrer"
              >
                {image.user.name}
              </a>
            </div>
          </div>
          {location}
        </div>
      </Modal>
    </>
  );
}

export default ImageItem;
