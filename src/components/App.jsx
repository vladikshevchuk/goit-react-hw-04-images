import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchLine: '',
  };

  handleFormSubmit = searchLine => {
    this.setState({ searchLine });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchLine={this.state.searchLine} />
      </div>
    );
  }
}

App.propTypes = {
  searchLine: PropTypes.string,
}

export default App;
