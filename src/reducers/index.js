import { combineReducers } from 'redux';
import video from './video';
import weather from './weather';

export default combineReducers({
  video,
  weather,
});
