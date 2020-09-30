import {
  ALL_VIDEOS_LOADED,
  VIDEO_LOADED,
  ALL_RELATED_VIDEOS_LOADED,
  VIDEO_ERROR,
} from '../actions/types';

const initialState = {
  video: null,
  videos: [],
  loading: false,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_VIDEOS_LOADED:
    case ALL_RELATED_VIDEOS_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        videos: payload,
      };
    case VIDEO_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        video: payload,
      };
    case VIDEO_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
