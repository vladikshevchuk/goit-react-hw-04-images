import PropTypes from 'prop-types';

function ButtonLoadMore({ onClick }) {
  return (
    <button className="Button" type="button" onClick={onClick}>
      Load more
    </button>
  );
}

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
