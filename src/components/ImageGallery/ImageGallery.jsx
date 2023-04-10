import { useState,useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import fetchApi from 'API/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({searchLine}) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchLine === '') {
      return
    }

    fetchApi(searchLine, page)
      .then(newImages => {
        setImages([...images, ...newImages.hits]);
      })
      .catch(erorr => console.log(erorr))
      .finally(() => setIsLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ page, searchLine ]);

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
  images: PropTypes.object,
  newImages: PropTypes.object,
};

export default ImageGallery;
