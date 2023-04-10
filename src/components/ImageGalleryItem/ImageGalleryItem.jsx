import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from 'components/modalWindow/modalWindow';

function ImageGalleryItem({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDawn = e => {
      if (e.code === 'Escape') {
        setIsModalOpen( false );
      }
    };

    window.addEventListener('keydown', handleKeyDawn);

    return () => {
      window.removeEventListener('keydown', handleKeyDawn);
    }
  }, []);

  const openModal = () => setIsModalOpen( true );

  const closeModal = e => {
    if (e.currentTarget === e.target) {
      setIsModalOpen( false );
    }
  };

  return (
    <>
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.tags}
        onClick={openModal}
      />
      {isModalOpen && <ModalWindow image={image} closeModal={closeModal} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
