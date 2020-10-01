import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { Line } from 'react-chartjs-2';

import Thumbnail from '../components/Thumbnail';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';
import { ListItem, ListItemContent } from '../components/List';

class WeatherListItem extends Component {
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

    // Generate temperature data
    const generateTempData = (forecast) => {
      let result = [];

      forecast.forEach((forecast) =>
        result.push(Math.ceil(forecast.temp - 273))
      );

      return result;
    };

    // Generate pressure data
    const generatePressureData = (forecast) => {
      let result = [];

      forecast.forEach((forecast) => result.push(forecast.pressure));

      return result;
    };

    // Generate humidity data
    const generateHumidityData = (forecast) => {
      let result = [];

      forecast.forEach((forecast) => result.push(forecast.humidity));

      return result;
    };

    const tempData = {
      labels: generateLabels(this.props.weather.forecast),
      datasets: [
        {
          lineTension: 0.1,
          backgroundColor: 'rgba(255,0,0,0.4)',
          borderColor: 'rgba(255,0,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,0,0,1)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,0,0,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: generateTempData(this.props.weather.forecast),
        },
      ],
    };

    const pressureData = {
      labels: generateLabels(this.props.weather.forecast),
      datasets: [
        {
          lineTension: 0.1,
          backgroundColor: 'rgba(0,0,255,0.4)',
          borderColor: 'rgba(0,0,255,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,255,1)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,0,255,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: generatePressureData(this.props.weather.forecast),
        },
      ],
    };

    const humidityData = {
      labels: generateLabels(this.props.weather.forecast),
      datasets: [
        {
          lineTension: 0.1,
          backgroundColor: 'rgba(0,255,0,0.4)',
          borderColor: 'rgba(0,255,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,255,0,1)',
          pointBackgroundColor: '#ffffff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,255,0,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: generateHumidityData(this.props.weather.forecast),
        },
      ],
    };

    return (
      <Fragment>
        {/* <Link to={`/${this.props.video.id}`}>
          <ListItem>
            <Thumbnail
              alt=''
              src={this.props.video.thumbnails.high.url}
              small={this.props.small}
            />
            <ListItemContent small={this.props.small}>
              <Title small={this.props.small}>{this.props.video.title}</Title>
              <div>
                <SubTitle small={this.props.small}>
                  {this.props.video.channelTitle}
                </SubTitle>
                <SubTitle small={this.props.small}>
                  {getFormattedTime(this.props.video.publishedAt)}
                </SubTitle>
              </div>
              <Description small={this.props.small}>
                {parser(
                  this.props.video.description.replaceAll('\n', '<br />')
                )}
              </Description>
            </ListItemContent>
          </ListItem>
        </Link> */}
        <Title>{this.props.weather.name}</Title>
        <div style={{ width: '100%', height: '350px', overflow: 'scroll' }}>
          <Line
            width={3200}
            height={350}
            data={humidityData}
            options={{
              legend: {
                display: false,
              },
              responsive: false,
              maintainAspectRatio: false,
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
        <div style={{ width: '100%', height: '350px', overflow: 'scroll' }}>
          <Line
            width={3200}
            height={350}
            data={pressureData}
            options={{
              legend: {
                display: false,
              },
              responsive: false,
              maintainAspectRatio: false,
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
        </div>
        <div style={{ width: '100%', height: '350px', overflow: 'scroll' }}>
          <Line
            width={3200}
            height={350}
            data={tempData}
            options={{
              legend: {
                display: false,
              },
              responsive: false,
              maintainAspectRatio: false,
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

export default WeatherListItem;
