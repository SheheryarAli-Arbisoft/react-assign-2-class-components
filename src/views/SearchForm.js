import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

import { getWeatherData } from '../actions/weather';

class SearchForm extends Component {
  constructor() {
    super();

    // Creating the initial state of the component
    this.state = {
      description: '',
    };

    // Binding methods to the current object
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { description } = this.state;

    // eslint-disable-next-line no-shadow
    const { getWeatherData } = this.props;

    // Getting weather data related to description
    getWeatherData(description);
  }

  render() {
    const { description } = this.state;

    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          <Input
            type='text'
            placeholder='Search'
            name='description'
            value={description}
            onChange={this.onChange}
          />
          <Button type='submit'>Search</Button>
        </Form>
      </Fragment>
    );
  }
}

SearchForm.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
};

export default connect(null, { getWeatherData })(SearchForm);
