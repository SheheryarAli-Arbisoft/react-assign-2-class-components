import React, { Component, Fragment } from 'react';
import WeatherListItem from './WeatherListItem';
import { Line } from 'react-chartjs-2';

import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    const data = {
      labels: [
        ['January', 'Month 1'],
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ],
      datasets: [
        {
          // label: 'My First dataset',
          // fill: false,
          lineTension: 0.1,
          // backgroundColor: 'rgba(75,192,192,0.4)',
          // borderColor: 'rgba(75,192,192,1)',
          // borderCapStyle: 'butt',
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: 'miter',
          // pointBorderColor: 'rgba(75,192,192,1)',
          // pointBackgroundColor: '#fff',
          // pointBorderWidth: 1,
          // pointHoverRadius: 5,
          // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          // pointHoverBorderColor: 'rgba(220,220,220,1)',
          // pointHoverBorderWidth: 2,
          // pointRadius: 1,
          // pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    };

    return (
      <Fragment>
        {!this.props.weather.loading &&
          this.props.weather.data.length > 0 &&
          this.props.weather.data.map((weather) => (
            <WeatherListItem key={weather.id} weather={weather} />
          ))}
        {/* <div style={{ width: '100%', height: '350px', overflow: 'scroll' }}>
          <Line
            width={3000}
            height={350}
            data={data}
            options={{
              responsive: false,
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: 'Temperature (°C)',
                    },
                  },
                ],
              },
            }}
          />
        </div> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(WeatherList);
