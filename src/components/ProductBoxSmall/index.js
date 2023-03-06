import React, { useEffect } from "react";
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';

function ProductBoxSmall({print}) {
  const componentName= "productbox-small";
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function afterOpenModal() {

  }

  function closeModal() {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === '27') {
        closeModal();
      }
    });
  })

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Zoom in"
      >
        <button onClick={closeModal} className={`${componentName}__modal-btn`}>
          <FaPlus />
        </button>
        <img className={`${componentName}__modal-image`} src={print.url} alt={print.title} />
      </Modal>

      <div className={componentName}>
        <img onClick={openModal} className={`${componentName}__image`} src={print.url} alt={print.title} />
      </div>
        <div className={`${componentName}__info`}>
          <div className={`${componentName}__image-title`}>{print.title}</div>
          <div className={`${componentName}__image-description`} dangerouslySetInnerHTML={{__html: print.description}}></div>
        </div>
    </>
  );
};

{/* <div className={`${componentName}__image-info`}>
  <div className={`${componentName}__image-title`}>{print.title}</div>
  <div className={`${componentName}__image-description`} dangerouslySetInnerHTML={{__html: print.description}}></div>
  <button onClick={openModal} className={`${componentName}__image-btn btn`}>Zoom in</button>
</div> */}

export default ProductBoxSmall;
