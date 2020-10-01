import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Charts from './Charts';

import Title from '../components/Title';
import { ListItem } from '../components/List';

class WeatherListItem extends Component {
  render() {
    const { name, forecast } = this.props.weather;

    return (
      <Fragment>
        <ListItem>
          <Title>{name}</Title>
          <Charts forecastData={forecast} />
        </ListItem>
      </Fragment>
    );
  }
}

WeatherListItem.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default WeatherListItem;
