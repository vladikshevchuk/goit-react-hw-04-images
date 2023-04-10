import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { string, object } from 'yup';
import { FaSearch } from 'react-icons/fa';

const initialValues = {
  search: '',
}

const schema = object({
  search: string().trim().required(),
});

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const search = values.search;
    this.setState({ search: search.toLowerCase().trim() });
    this.props.onSubmit(search.toLowerCase().trim());
    resetForm();
  };

  render() {
    return (
      <header className="Searchbar">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
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
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
