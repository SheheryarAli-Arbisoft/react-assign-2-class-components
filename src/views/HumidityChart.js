import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

class HumidityChart extends Component {
  render() {
    const { labels, forecastData, defaultStyles, defaultOptions } = this.props;

    // Generate humidity data
    const generateHumidityData = (forecast) => {
      let result = [];

      forecast.forEach((forecast) => result.push(forecast.humidity));

      return result;
    };

    const getData = () => ({
      labels,
      datasets: [
        {
          ...defaultStyles,
          backgroundColor: 'rgba(0,255,0,0.4)',
          borderColor: 'rgba(0,255,0,1)',
          pointBorderColor: 'rgba(0,255,0,1)',
          pointHoverBackgroundColor: 'rgba(0,255,0,1)',
          data: generateHumidityData(forecastData),
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
                      labelString: 'Humidity (%)',
                    },
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 100,
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

HumidityChart.propTypes = {
  labels: PropTypes.array.isRequired,
  forecastData: PropTypes.array.isRequired,
  defaultStyles: PropTypes.object.isRequired,
  defaultOptions: PropTypes.object.isRequired,
};

export default HumidityChart;
