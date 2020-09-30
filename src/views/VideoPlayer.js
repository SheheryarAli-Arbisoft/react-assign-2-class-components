import React, { Component, Fragment, createRef } from 'react';
import parser from 'html-react-parser';
import SearchForm from './SearchForm';
import VideosList from './VideosList';

import Heading from '../components/Heading';
import {
  VideoPlayerSection,
  VideoSection,
  RelatedVideosSection,
} from '../components/Section';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';

import { connect } from 'react-redux';
import { getVideo, getAllRelatedVideos } from '../actions/video';

// Getting the video iframe
const getVideoIFrame = (embedHtml) => {
  let videoUrl = embedHtml.split(' ')[3];
  videoUrl = 'https:/' + videoUrl.slice(6, -1);

  return (
    <iframe
      width='100%'
      height='500px'
      style={{ marginBottom: '20px' }}
      src={videoUrl}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

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

class VideoPlayer extends Component {
  constructor() {
    super();
    this.windowRef = createRef();
  }

  componentDidMount() {
    const { match, getVideo, getAllRelatedVideos } = this.props;

    getVideo(match.params.id);
    getAllRelatedVideos(match.params.id);

    this.windowRef.current.scrollTop = 0;
  }

  componentDidUpdate(prevProps) {
    const { match, getVideo, getAllRelatedVideos } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      getVideo(match.params.id);
      getAllRelatedVideos(match.params.id);
    }
  }

  render() {
    return (
      <Fragment>
        <div ref={this.windowRef}>
          <Heading>
            <i className='fab fa-youtube'></i> Youtube Video Player
          </Heading>
          <SearchForm />

          <VideoPlayerSection>
            <VideoSection>
              {!this.props.video.loading && this.props.video.video && (
                <Fragment>
                  {getVideoIFrame(this.props.video.video.embedHtml)}
                  <Title>{this.props.video.video.title}</Title>
                  <div>
                    <SubTitle>{this.props.video.video.channelTitle}</SubTitle>
                    <SubTitle>
                      {getFormattedTime(this.props.video.video.publishedAt)}
                    </SubTitle>
                  </div>
                  <Description full>
                    {parser(
                      this.props.video.video.description.replaceAll(
                        '\n',
                        '<br />'
                      )
                    )}
                  </Description>
                </Fragment>
              )}
            </VideoSection>

            <RelatedVideosSection>
              <VideosList small />
            </RelatedVideosSection>
          </VideoPlayerSection>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps, { getVideo, getAllRelatedVideos })(
  VideoPlayer
);
