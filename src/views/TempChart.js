import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

class TempChart extends Component {
  render() {
    const { labels, forecastData, defaultStyles, defaultOptions } = this.props;

    // Generate temperature data
    const generateTempData = (forecast) => {
      console.log(forecast);
      let result = [];

      forecast.forEach((forecast) =>
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
      <Fragment>
        <div style={{ width: '100%', height: '350px', overflow: 'scroll' }}>
          <Line
            width={3200}
            height={350}
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
        </div>
      </Fragment>
    );
  }
}

TempChart.propTypes = {
  labels: PropTypes.array.isRequired,
  forecastData: PropTypes.array.isRequired,
  defaultStyles: PropTypes.object.isRequired,
  defaultOptions: PropTypes.object.isRequired,
};

export default TempChart;
