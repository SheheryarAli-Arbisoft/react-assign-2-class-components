import axios from 'axios';
import {
  ALL_VIDEOS_LOADED,
  ALL_RELATED_VIDEOS_LOADED,
  VIDEO_LOADED,
  VIDEO_ERROR,
} from './types';

const API_KEY = 'AIzaSyA6vjCwXxs-wFd7_Hr0eFA6YuHYX7INahM';

// Generate the search url
const generateSearchUrl = (description) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${description}&type=video&key=${API_KEY}`;
};

// Get required data from response
const getRequiredVideosData = (response) => {
  let result = [];

  response.items.forEach((item) => {
    // Destructuring the required fields
    const { videoId: id } = item.id;

    const {
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    } = item.snippet;

    // Adding the object to the results array
    result = [
      ...result,
      {
        id,
        title,
        channelTitle,
        publishedAt,
        description,
        thumbnails,
      },
    ];
  });

  return result;
};

// Get all videos related to description
export const getAllVideos = (description) => async (dispatch) => {
  try {
    // Getting all the video results related to the description
    let result = await axios.get(generateSearchUrl(description));

    // Getting required data from response
    result = getRequiredVideosData(result.data);

    dispatch({
      type: ALL_VIDEOS_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Generate realted videos url
const generateRelatedVideosUrl = (id) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&relatedToVideoId=${id}&type=video&key=${API_KEY}`;
};

// Get all videos related to a video
export const getAllRelatedVideos = (id) => async (dispatch) => {
  try {
    // Getting all the videos related to the current video
    let result = await axios.get(generateRelatedVideosUrl(id));

    // Getting required data from response
    result = getRequiredVideosData(result.data);

    dispatch({
      type: ALL_RELATED_VIDEOS_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Generate single video url
const generateSingleVideoUrl = (id) => {
  return `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=${id}&key=${API_KEY}`;
};

// Get required single video data from response
const getRequiredSingleVideoData = (response) => {
  // Destructuring the required fields
  const { title, channelTitle, publishedAt, description } = response.snippet;

  const { embedHtml } = response.player;

  return {
    title,
    channelTitle,
    publishedAt,
    description,
    embedHtml,
  };
};

// Get a single video
export const getVideo = (id) => async (dispatch) => {
  try {
    // Getting the video related to the id
    let result = await axios.get(generateSingleVideoUrl(id));

    // console.log(result.data);

    result = getRequiredSingleVideoData(result.data.items[0]);

    dispatch({
      type: VIDEO_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
