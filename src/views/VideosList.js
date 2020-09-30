import React, { Component, Fragment } from 'react';
import VideosListItem from './VideoListItem';

import { connect } from 'react-redux';

class VideosList extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.video.loading &&
          this.props.video.videos.length > 0 &&
          this.props.video.videos.map((video) => (
            <VideosListItem
              key={video.id}
              video={video}
              small={this.props.small}
            />
          ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps)(VideosList);
