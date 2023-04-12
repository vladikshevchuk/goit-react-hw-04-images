import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from 'API/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';

function App() {
  const [searchLine, setSearchLine] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = searchQuery => {
    setSearchLine(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleShowMore = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (!searchLine) {
      return;
    }

    setIsLoading(true);

    fetchApi(searchLine, page)
      .then(newImages => {
        setImages(prevImages => [...prevImages, ...newImages.hits]);
      })
      .catch(erorr => console.log(erorr))
      .finally(() => setIsLoading(false));
  }, [page, searchLine]);

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && <ButtonLoadMore onClick={ handleShowMore } />}
    </div>
  );
}

App.propTypes = {
  searchLine: PropTypes.string,
};

export default App;
