import React, { useEffect } from "react";
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';

interface Print {
  url: string;
  title: string;
  description: string;
  // Add other properties as needed
}

interface ProductBoxSmallProps {
  print: Print;
}

const ProductBoxSmall: React.FC<ProductBoxSmallProps> = ({ print }) => {
  const componentName = "productbox-small";
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function afterOpenModal() {
    // You can add logic here if needed
  }

  function closeModal() {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
        <div className={`${componentName}__image-description`} dangerouslySetInnerHTML={{ __html: print.description }}></div>
      </div>
    </>
  );
};

export default ProductBoxSmall;
