import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import WeatherListItem from './WeatherListItem';

import { connect } from 'react-redux';
import { List } from '../components/List';

class WeatherList extends Component {
  render() {
    const { loading, data } = this.props.weather;

    return (
      <Fragment>
        <List>
          {!loading &&
            data.length > 0 &&
            data.map((weather) => (
              <WeatherListItem key={weather.id} weather={weather} />
            ))}
        </List>
      </Fragment>
    );
  }
}

WeatherList.propTypes = {
  weather: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(WeatherList);
