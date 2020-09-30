import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

import Thumbnail from '../components/Thumbnail';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';
import { ListItem, ListItemContent } from '../components/List';

// Get formatted video time
const getFormattedTime = (dateString) => {
  const time = new Date(dateString);
  const currentTime = Date.now();

  const duration = currentTime - time;

  // Returning the duration in years
  let result = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} year${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in months
  result = Math.floor(duration / (1000 * 60 * 60 * 24 * 30));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} month${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in days
  result = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} day${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in minutes
  result = Math.floor(duration / (1000 * 60 * 60));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} minute${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }
};

class VideoListItem extends Component {
  render() {
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
        <div>{this.props.weather.name}</div>
        <div>
          {this.props.weather.forecast.map((forecast) => (
            <Fragment>
              <div>{forecast.dateTime}</div>
              <div>{forecast.temp}</div>
              <div>{forecast.pressure}</div>
              <div>{forecast.humidity}</div>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default VideoListItem;
