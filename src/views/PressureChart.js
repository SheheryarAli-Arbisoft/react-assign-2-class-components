import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { ChartInnerWrapper } from '../components/Chart';
import SubTitle from '../components/SubTitle';

class PressureChart extends Component {
  render() {
    const { labels, forecastData, defaultStyles, defaultOptions } = this.props;

    // Generate pressure data
    const generatePressureData = (forecast) => {
      let result = [];

      forecast.forEach((forecast) => result.push(forecast.pressure));

      return result;
    };

    const getData = () => ({
      labels,
      datasets: [
        {
          ...defaultStyles,
          backgroundColor: 'rgba(0,0,255,0.4)',
          borderColor: 'rgba(0,0,255,1)',
          pointBorderColor: 'rgba(0,0,255,1)',
          pointHoverBackgroundColor: 'rgba(0,0,255,1)',
          data: generatePressureData(forecastData),
        },
      ],
    });

    return (
      <Fragment>
        <SubTitle>Pressure</SubTitle>
        <ChartInnerWrapper>
          <Line
            width={3200}
            height={250}
            data={getData()}
            options={{
              ...defaultOptions,
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Pressure (hPa)',
                    },
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 1500,
                      stepSize: 300,
                    },
                  },
                ],
              },
            }}
          />
        </ChartInnerWrapper>
      </Fragment>
    );
  }
}

PressureChart.propTypes = {
  labels: PropTypes.array.isRequired,
  forecastData: PropTypes.array.isRequired,
  defaultStyles: PropTypes.object.isRequired,
  defaultOptions: PropTypes.object.isRequired,
};

export default PressureChart;
