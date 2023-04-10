import PropTypes from 'prop-types';

const ModalWindow = ({ image, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={image.largeImageURL} alt={image.tage} />
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  image: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default ModalWindow;
