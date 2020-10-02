import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WeatherListItem from './WeatherListItem';

import { List } from '../components/List';

// eslint-disable-next-line react/prefer-stateless-function
class WeatherList extends Component {
  render() {
    const {
      weather: { loading, data },
    } = this.props;

    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
      <Fragment>
        <List>
          {!loading &&
            data.length > 0 &&
            data.map(weather => (
              <WeatherListItem key={weather.id} weather={weather} />
            ))}
        </List>
      </Fragment>
    );
  }
}

WeatherList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weather: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(WeatherList);
