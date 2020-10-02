import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { ChartInnerWrapper } from '../components/Chart';
import SubTitle from '../components/SubTitle';

class TempChart extends Component {
  render() {
    const { labels, forecastData, defaultStyles, defaultOptions } = this.props;

    // eslint-disable-next-line no-shadow
    const generateTempData = forecastData => {
      const result = [];

      forecastData.forEach(forecast =>
        result.push(Math.ceil(forecast.temp - 273))
      );

      return result;
    };

    const getData = () => ({
      labels,
      datasets: [
        {
          ...defaultStyles,
          backgroundColor: 'rgba(255,0,0,0.4)',
          borderColor: 'rgba(255,0,0,1)',
          pointBorderColor: 'rgba(255,0,0,1)',
          pointHoverBackgroundColor: 'rgba(255,0,0,1)',
          data: generateTempData(forecastData),
        },
      ],
    });

    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
      <Fragment>
        <SubTitle>Temperature</SubTitle>
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
                      labelString: 'Temperature (°C)',
                    },
                    ticks: {
                      stepSize: 10,
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

TempChart.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  labels: PropTypes.array.isRequired,
  forecastData: PropTypes.array.isRequired,
  defaultStyles: PropTypes.object.isRequired,
  defaultOptions: PropTypes.object.isRequired,
};

export default TempChart;
