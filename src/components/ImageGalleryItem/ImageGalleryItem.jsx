import { Component } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from 'components/modalWindow/modalWindow';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDawn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDawn);
  }

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = e => {
    if (e.currentTarget === e.target) {
      this.setState({ isModalOpen: false })
    }
  }

  handleKeyDawn = e => {
    if (e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { image } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <img
          className="ImageGalleryItem-image"
          src={image.webformatURL}
          alt={image.tags}
          onClick={this.openModal}
        />
        {isModalOpen && <ModalWindow image={image} closeModal={ this.closeModal } />}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
}

export default ImageGalleryItem;
