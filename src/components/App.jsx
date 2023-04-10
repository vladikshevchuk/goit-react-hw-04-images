import { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [searchLine, setSearchLine] = useState('');

  const handleFormSubmit = searchLine => {
    setSearchLine(searchLine);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery searchLine={searchLine} />
    </div>
  );
}

App.propTypes = {
  searchLine: PropTypes.string,
};

export default App;
