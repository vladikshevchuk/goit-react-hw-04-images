import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import fetchApi from 'API/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchLine !== this.props.searchLine) {
      this.setState({ images: [], page: 1 });
    }
    if (
      prevProps.searchLine !== this.props.searchLine ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      fetchApi(this.props.searchLine, this.state.page)
        .then(newImages => {
          this.setState(state => {
            return {
              images: [...state.images, ...newImages.hits],
            };
          });
        })
        .catch(erorr => console.log(erorr))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleShowMore = () => {
    this.setState(state => {
      return { page: state.page + 1 };
    });
  };

  render() {
    const newLocal = this.state.images.length !== 0;
    return (
      <>
        <ul className="ImageGallery">
          {newLocal &&
            this.state.images.map((image, i) => (
              <li key={i} className="ImageGalleryItem">
                <ImageGalleryItem image={image} />
              </li>
              // использую индекс для ключа, а не айди, потому-что с Апи,
              // бывает, приходят картинки с одинаковыми айди,
              // и консоль выбивает ошибки
            ))}
        </ul>
        {this.state.isLoading && (
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
        {newLocal && (
          <button
            className="Button"
            type="button"
            onClick={this.handleShowMore}
          >
            Load more
          </button>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.object,
  newImages: PropTypes.object,
};

export default ImageGallery;
