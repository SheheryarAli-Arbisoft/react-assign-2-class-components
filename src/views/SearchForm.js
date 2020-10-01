import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

import { connect } from 'react-redux';
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

    // Getting description from state
    const { description } = this.state;

    // Getting action from props
    const { getWeatherData } = this.props;

    getWeatherData(description);
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmit}>
          <Input
            type='text'
            placeholder='Search'
            name='description'
            value={this.state.description}
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
