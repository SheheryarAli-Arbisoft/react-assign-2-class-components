import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Charts from './Charts';

import Title from '../components/Title';
import { ListItem } from '../components/List';

// eslint-disable-next-line react/prefer-stateless-function
class WeatherListItem extends Component {
  render() {
    const {
      weather: { name, forecast },
    } = this.props;

    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
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
  // eslint-disable-next-line react/forbid-prop-types
  weather: PropTypes.object.isRequired,
};

export default WeatherListItem;
