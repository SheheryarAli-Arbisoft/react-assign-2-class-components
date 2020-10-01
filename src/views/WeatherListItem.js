import React, { Component, Fragment } from 'react';

import Charts from './Charts';

import Thumbnail from '../components/Thumbnail';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';
import { ListItem, ListItemContent } from '../components/List';

class WeatherListItem extends Component {
  render() {
    const { name, forecast } = this.props.weather;

    return (
      <Fragment>
        <Title>{name}</Title>
        <Charts forecastData={forecast} />
      </Fragment>
    );
  }
}

export default WeatherListItem;
