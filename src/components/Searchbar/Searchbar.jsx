import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import { FaSearch } from 'react-icons/fa';

const initialValues = {
  search: '',
};

const schema = object({
  search: string().trim().required(),
});

function Searchbar({ onSubmit }) {

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.search.toLowerCase().trim());
    resetForm();
  };

  return (
    <header className="Searchbar">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <FaSearch value={{ className: 'searchForm-button-label' }} />
          </button>

          <Field
            name="search"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
