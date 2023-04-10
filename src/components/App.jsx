import { useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [searchLine, setSearchLine] = useState('');

  return (
    <div className="App">
      <Searchbar onSubmit={setSearchLine} />
      <ImageGallery searchLine={searchLine} />
    </div>
  );
}

App.propTypes = {
  searchLine: PropTypes.string,
};

export default App;
