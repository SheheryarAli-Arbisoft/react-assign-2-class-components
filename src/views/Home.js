import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import SearchForm from './SearchForm';
import VideosList from './VideosList';

import { connect } from 'react-redux';
import { getAllVideos } from '../actions/video';

import Heading from '../components/Heading';

class Home extends Component {
  componentDidMount() {
    const {
      location: { search },
      getAllVideos,
    } = this.props;

    // Getting the search paramters from the url
    const parsed = queryString.parse(search);
    const description = parsed.q;

    if (description) {
      getAllVideos(description);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
      getAllVideos,
    } = this.props;

    // Getting the description from the url parameters
    const parsed = queryString.parse(search);
    const prevParsed = queryString.parse(prevProps.location.search);

    if (parsed.q !== prevParsed.q) {
      const description = parsed.q;

      if (description) {
        getAllVideos(description);
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Heading>
          <i className='fab fa-youtube'></i> Youtube Video Player
        </Heading>
        <SearchForm />
        <VideosList />
      </Fragment>
    );
  }
}

export default connect(null, { getAllVideos })(Home);
