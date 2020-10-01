import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TempChart from './TempChart';
import PressureChart from './PressureChart';
import HumidityChart from './HumidityChart';

class Charts extends Component {
  render() {
    // Get day from number
    const getDayName = (number) => {
      switch (number) {
        case 0:
          return 'Sun';
        case 1:
          return 'Mon';
        case 2:
          return 'Tue';
        case 3:
          return 'Wed';
        case 4:
          return 'Thu';
        case 5:
          return 'Fri';
        case 6:
          return 'Sat';
        default:
          return '';
      }
    };

    // Get month from number
    const getMonthName = (number) => {
      switch (number) {
        case 0:
          return 'Jan';
        case 1:
          return 'Feb';
        case 2:
          return 'Mar';
        case 3:
          return 'Apr';
        case 4:
          return 'May';
        case 5:
          return 'Jun';
        case 6:
          return 'Jul';
        case 7:
          return 'Aug';
        case 8:
          return 'Sep';
        case 9:
          return 'Oct';
        case 10:
          return 'Nov';
        case 11:
          return 'Dec';
        default:
          return '';
      }
    };

    // Get formatted date
    const getFormattedDate = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();

      let formattedHours = hours % 12;

      return [
        `${getDayName(date.getDay())}, ${date.getDate()} ${getMonthName(
          date.getMonth()
        )}`,
        `${formattedHours === 0 ? '12' : formattedHours}:${
          minutes < 10 ? `0${minutes}` : minutes
        } ${hours >= 12 ? 'PM' : 'AM'}`,
      ];
    };

    // Generate the dataset to display in chart
    const generateLabels = (forecast) => {
      let result = [];

      forecast.forEach((forecast) => {
        let dateTime = new Date(forecast.dateTime);
        result.push(getFormattedDate(dateTime));
      });

      return result;
    };

    // Getting the forecast data from the props
    const { forecastData } = this.props;

    // Generating the labels which will be passed down to the charts
    const labels = generateLabels(forecastData);

    // Defining default styles for charts
    const defaultStyles = {
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
    };

    // Defining default options for charts
    const defaultOptions = {
      legend: {
        display: false,
      },
      responsive: false,
      maintainAspectRatio: false,
    };

    return (
      <Fragment>
        <TempChart
          labels={labels}
          forecastData={forecastData}
          defaultStyles={defaultStyles}
          defaultOptions={defaultOptions}
        />
        <PressureChart
          labels={labels}
          forecastData={forecastData}
          defaultStyles={defaultStyles}
          defaultOptions={defaultOptions}
        />
        <HumidityChart
          labels={labels}
          forecastData={forecastData}
          defaultStyles={defaultStyles}
          defaultOptions={defaultOptions}
        />
      </Fragment>
    );
  }
}

Charts.propTypes = {
  forecastData: PropTypes.array.isRequired,
};

export default Charts;
