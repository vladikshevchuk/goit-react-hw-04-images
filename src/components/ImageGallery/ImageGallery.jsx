import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import fetchApi from 'API/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ searchLine }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchLine === '') {
      return;
    }

    setSearchQuery(searchLine);

    setIsLoading(true);

    fetchApi(searchLine, page)
      .then(newImages => {
        setImages(prevImages => [...prevImages, ...newImages.hits]);
      })
      .catch(erorr => console.log(erorr))
      .finally(() => setIsLoading(false));
  }, [page, searchLine]);

  useEffect(() => {
    if (searchLine === '') {
      return;
    }

    if (searchQuery !== searchLine) {
      setPage(1);
      setImages([]);
    }
  }, [searchLine, searchQuery]);

  function handleShowMore() {
    setPage(state => state + 1);
  }

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
      {isLoading && (
        <div className="Loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      {images.length !== 0 && (
        <button className="Button" type="button" onClick={handleShowMore}>
          Load more
        </button>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  searchLine: PropTypes.string.isRequired,
  images: PropTypes.object,
  newImages: PropTypes.object,
};

export default ImageGallery;
