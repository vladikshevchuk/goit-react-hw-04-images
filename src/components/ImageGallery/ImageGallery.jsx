import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <>
      <ul className="ImageGallery">
        {images.length !== 0 &&
          images.map((image, i) => (
            <li key={i} className="ImageGalleryItem">
              <ImageGalleryItem image={image} />
            </li>
            // использую индекс для ключа, а не айди, потому-что с Апи,
            // бывает, приходят картинки с одинаковыми айди,
            // и консоль выбивает ошибки
          ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
