import axios from 'axios';
import { WEATHER_DATA_LOADED, WEATHER_ERROR } from './types';

const API_KEY = '8cf50a6624d851440243826f2e4d7b3a';

// Generate weather url
const generateWeatherUrl = (description) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${description}&appid=${API_KEY}`;
};

// Get required data from response
const getRequiredData = (response) => {
  const { id, name } = response.city;

  let result = { id, name, forecast: [] };

  response.list.forEach((item) => {
    const { dt: dateTime } = item;

    const { temp, pressure, humidity } = item.main;

    result.forecast.push({
      dateTime,
      temp,
      pressure,
      humidity,
    });
  });

  return result;
};

// Get weather data
export const getWeatherData = (description) => async (dispatch, getState) => {
  const {
    weather: { data },
  } = getState();

  if (
    data
      .map((item) => item.name.toLowerCase())
      .indexOf(description.toLowerCase()) !== -1
  ) {
    return;
  }

  try {
    let result = await axios.get(generateWeatherUrl(description));

    result = getRequiredData(result.data);

    dispatch({
      type: WEATHER_DATA_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: WEATHER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
