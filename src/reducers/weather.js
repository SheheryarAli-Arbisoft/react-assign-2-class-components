import { WEATHER_DATA_LOADED, WEATHER_ERROR } from '../actions/types';

const initialState = {
  data: [],
  loading: true,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WEATHER_DATA_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        data: [payload, ...state.data],
      };
    case WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
